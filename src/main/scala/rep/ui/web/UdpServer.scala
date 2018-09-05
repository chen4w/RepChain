package rep.ui.web

import java.net.InetSocketAddress

import akka.actor.{Actor, ActorRef}
import akka.io.{IO, Udp, UdpConnected}
import akka.util.ByteString
import rep.app.conf.SystemProfile
import rep.protos.peer.Transaction
import rep.ui.web.UdpServer.addr

object UdpServer {

  val addr:InetSocketAddress = new InetSocketAddress("0.0.0.0", SystemProfile.getUdpServicePort)

}

//#connected
class UdpServer extends Actor {

  import context.system

  override def preStart(): Unit = {
    IO(Udp) ! Udp.Bind(self, addr)
    print(s"UDP Server port:" + addr.getPort)
  } // 绑定端口，进行监听;UdpConnected 为与指定的ip:port进行通信

  override def receive = {
    case Udp.Bound(local) =>
      //#listener
      print("hello country")
      // 发送数据到指定云平台，来注册通道
      sender ! Udp.Send(ByteString("ep=LX1537GRA8EHQ66S&pw=123456"), new InetSocketAddress("115.29.240.46",6000))
      context.become(ready(sender()))
//    case Udp.Received(data, remote) =>
//      print(remote)
//      print("hello world")
  }

  def ready(socket: ActorRef): Receive = {
    case Udp.Received(data, remote) =>
      val processed = // parse data etc., e.g. using PipelineStage
      //#listener
       print(data.utf8String)
      try {
        val tran = Transaction.parseFrom(data.toArray)
        print(tran)
      } catch {
        case e:Exception => print(e.getMessage)
      }
      val back = data.utf8String + "back"
      //TODO 把接收到的数据转为交易
      //#listener
      socket ! Udp.Send(ByteString(back), remote) // example server echoes back
//    case Udp.Unbind  => socket ! Udp.Unbind
//    case Udp.Unbound => context.stop(self)
  }
}
