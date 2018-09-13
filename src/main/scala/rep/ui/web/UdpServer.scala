package rep.ui.web

import java.net.InetSocketAddress
import java.nio.charset.StandardCharsets

import akka.actor.{Actor, ActorRef}
import akka.pattern.ask
import akka.io.{IO, Udp, UdpConnected}
import akka.util.{ByteString, Timeout}
import com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureECDSA
import com.trueaccord.scalapb.json.JsonFormat
import org.bouncycastle.util.encoders.Hex
import org.json4s.jackson.JsonMethods
import org.json4s.native.Serialization
import org.json4s.{DefaultFormats, string2JsonInput}
import org.json4s.native.Serialization.{read, write}
import rep.app.conf.SystemProfile
import rep.crypto.{ECDSASign, Sha256}
import rep.network.PeerHelper
import rep.network.PeerHelper.transactionCreator
import rep.network.base.ModuleHelper
import rep.network.tools.PeerExtension
import rep.protos.peer.ChaincodeSpec.CodeType.CODE_JAVASCRIPT
import rep.protos.peer.{Block, Transaction}
import rep.protos.peer.Transaction.Type.CHAINCODE_INVOKE
import rep.protos.udpTransaction._
import rep.sc.Sandbox.DoTransactionResult
import rep.sc.{Shim, TransProcessor}
import rep.sc.TransProcessor.PreTransaction
import rep.sc.tpl.IotModel
import rep.sc.tpl.IotModel.IotPut
import rep.storage.IdxPrefix.WorldStateKeyPreFix
import rep.storage.{ImpDataAccess, ImpDataPreloadMgr}
import rep.utils.GlobalUtils.ActorType

import scala.concurrent.duration._
import scala.concurrent.Await

object UdpServer {

  val local:InetSocketAddress = new InetSocketAddress("0.0.0.0", SystemProfile.getUdpServicePort)
  val remote:InetSocketAddress = new InetSocketAddress("115.29.240.46",6000)

}

//#connected
class UdpServer extends Actor with ModuleHelper{

  import rep.ui.web.UdpServer.{ local, remote }
  import context.system
  implicit val timeout = Timeout(1000.seconds)
  var sandbox :ActorRef = null  //context.actorOf(TransProcessor.props("sandboxUdpPost", "", self), "sandboxUdpPost")
  var sr: ImpDataAccess = null
  implicit val formats = DefaultFormats
  implicit val serialization = Serialization

  override def preStart(): Unit = {
    sr = ImpDataAccess.GetDataAccess(pe.getSysTag)
    sandbox  = context.actorOf(TransProcessor.props("sandboxUdpPost", "", self), "sandboxUdpPost")
    // 绑定端口，进行监听;UdpConnected 为与指定的ip:port进行通信，避免其他未知client消息
    IO(UdpConnected) ! UdpConnected.Connect(self, remote, Option(local))
    print(s"UDP Server port:" + local.getPort)

  }

  override def receive = {
    case UdpConnected.Connected =>
      // 绑定端口成功会打印"hello world"
      print("hello world")
      // 发送数据到指定云平台，来注册通道
      sender ! UdpConnected.Send(ByteString("ep=LX1537GRA8EHQ66S&pw=123456"), remote)

    case UdpConnected.Received(data) =>
      try {
        print(data.asByteBuffer.toString) // 查看字节长度
        val tran = IotData.parseFrom(data.toArray)
        print(tran)
        val iot_data = JsonMethods.parse(string2JsonInput(tran.data)).extract[IotModel.IotData]
        val iot_data1 = JsonMethods.parse(tran.data).extract[IotModel.IotData]
        val iot_data2 = read[IotModel.IotData](tran.data)
        val cid = Block.parseFrom(sr.getBlockByHeight(1)).transactions(0).getPayload.getChaincodeID.name  // 从创世块中拿到合约id
        // TODO 后续要改为动态的存入和获取，如下
//        val shim = new Shim(context.system, cid)
//        val id_cid = shim.getVal(iot_data.id + "_cid")   // 获取对应的cid，这个要填在新构造的交易里面
//        val cert_addr = shim.getVal(iot_data.id + "_addr")  // 获取对应的addr
        // 此处可能不一定是信任列表证书，可能是注册好的证书
        val cert = ECDSASign.getCertByNodeAddr("1Luv5vq4v1CRkTN98YMhqQV1F18nGv11gX")  // 此处的短地址最后要改为id_addr
        val tOutSig = tran.withSignature(com.google.protobuf.ByteString.EMPTY)
        val asn1Signature = SignatureECDSA.convertXMLDSIGtoASN1(tran.signature.toByteArray)
        ECDSASign.verify(asn1Signature, tOutSig.toByteArray, cert.get.getPublicKey) match {
          case true =>
            print("Signature verify success")
            // 重新构建交易，用当前节点进行签名
            val iotPut = new IotPut(tran.data, Hex.toHexString(tran.signature.toByteArray))  // 构建输入参数
//            val name = "f6b28f48559d16b687007c3252943182989efd9c592ad35065b03ba53bae43e9"
            val txr =transactionCreator(pe.getSysTag,CHAINCODE_INVOKE, "", "put_iotData", Seq(write(iotPut)),"",Option(cid), CODE_JAVASCRIPT)  // 此处cid最后应该是用id_cid
            val iotput = JsonMethods.parse(txr.getPayload.getCtorMsg.args.mkString).extract[IotPut]
            execTran(txr, sender)
          case false =>
            print("Signature verify fail")
            sender ! UdpConnected.Send(ByteString("Signature verify fail", StandardCharsets.UTF_8), remote)
        }
      } catch {
        case e:Exception =>
          print(e.getMessage)
          sender ! UdpConnected.Send(ByteString(e.getMessage), remote)
      }
//      print(data.utf8String)
//      val back = data.utf8String + "back"
//      sender ! UdpConnected.Send(ByteString(back), remote) // example server echoes back
  }

  /**
    * 预执行交易，并广播
    * @param transaction
    * @param socket
    */
  def execTran(transaction: Transaction, socket: ActorRef): Unit = {
    val tran = transaction
    // TODO 此处需要将获取到的交易重新打包为RepChain可接受的交易
    val future = sandbox ? PreTransaction(tran)
    val result = Await.result(future, timeout.duration).asInstanceOf[DoTransactionResult]
    // 释放快照
    ImpDataPreloadMgr.Free(pe.getDBTag,tran.txid)
    result.err match {
      case None =>
        //预执行正常,提交并广播交易
        getActorRef(ActorType.TRANSACTION_POOL) ! tran // 给交易池发送消息 ！=》告知（getActorRef）
        socket ! UdpConnected.Send(ByteString("Broadcast Success", StandardCharsets.UTF_8), remote)
      case Some(e) =>
        //预执行异常,废弃交易，向api调用者发送异常
        print(e.cause.getMessage)
        socket ! UdpConnected.Send(ByteString(e.cause.getMessage), remote)
    }
  }
}
