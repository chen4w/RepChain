package rep.ui.web

import java.net.InetSocketAddress
import java.nio.charset.StandardCharsets

import akka.actor.{Actor, ActorRef}
import akka.pattern.ask
import akka.io.{IO, Udp, UdpConnected}
import akka.util.{ByteString, Timeout}
import rep.app.conf.SystemProfile
import rep.crypto.{ECDSASign, Sha256}
import rep.network.PeerHelper
import rep.network.base.ModuleHelper
import rep.protos.peer.Transaction
import rep.protos.transaction.IotTransaction
import rep.sc.Sandbox.DoTransactionResult
import rep.sc.TransProcessor
import rep.sc.TransProcessor.PreTransaction
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
  val timeout = Timeout(1000.seconds)
  val sandbox = context.actorOf(TransProcessor.props("sandbox_udp", "", self), "sandboxUdpPost")

  override def preStart(): Unit = {
    // 绑定端口，进行监听;UdpConnected 为与指定的ip:port进行通信，避免其他未知client消息
    IO(UdpConnected) ! UdpConnected.Connect(self, remote, Option(local))
    print(s"UDP Server port:" + local.getPort)

  }

  override def receive = {
    case UdpConnected.Connected =>
      //#listener
      print("hello world")
      // 发送数据到指定云平台，来注册通道
      sender ! UdpConnected.Send(ByteString("ep=LX1537GRA8EHQ66S&pw=123456"), remote)

    case UdpConnected.Received(data) =>
//      print(data.utf8String)
      val back = data.utf8String + "back"
      try {
        // 构建交易
        val tran = IotTransaction.parseFrom(data.toArray)
        print(tran)
        // 此处可能不一定是信任列表证书，可能是注册好的证书
        val cert = ECDSASign.getCertByNodeAddr(tran.cert.toStringUtf8)
        val tOutSig = tran.withSignature(com.google.protobuf.ByteString.EMPTY);
        ECDSASign.verify(tran.signature.toByteArray, Sha256.hash(tOutSig.toByteArray), cert.get.getPublicKey) match {
          case true =>
            // TODO execTran(tran, sender)
            sender ! UdpConnected.Send(ByteString("签名验证成功", StandardCharsets.UTF_8), remote)
          case false => sender ! UdpConnected.Send(ByteString("签名验证错误", StandardCharsets.UTF_8), remote)
        }
      } catch {
        case e:Exception =>
          print(e.getMessage)
          sender ! UdpConnected.Send(ByteString(e.getMessage), remote)
      }
//      sender ! UdpConnected.Send(ByteString(back), remote) // example server echoes back
  }

/*
  // 预执行交易，并广播
  def execTran(iotTransaction: IotTransaction, socket: ActorRef): Unit = {
    val tran = iotTransaction
    // TODO 此处需要将获取到的交易重新打包为RepChain可接受的交易
     // val txr = PeerHelper.transactionCreator()
    val future = sandbox ? PreTransaction(tran)
    val result = Await.result(future, timeout.duration).asInstanceOf[DoTransactionResult]
    val rv = result
    rv.err match {
      case None =>
        //预执行正常,提交并广播交易
        getActorRef(ActorType.TRANSACTION_POOL) ! tran // 给交易池发送消息 ！=》告知（getActorRef）
        socket ! UdpConnected.Send(ByteString("Success"), remote)
      case Some(e) =>
        //预执行异常,废弃交易，向api调用者发送异常
        socket ! UdpConnected.Send(ByteString(e.cause.getMessage), remote)
    }
  }*/
}
