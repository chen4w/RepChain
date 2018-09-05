package rep.ui.web

import java.net.InetSocketAddress

import akka.actor.{Actor, ActorRef}
import akka.io.{IO, Udp, UdpConnected}
import rep.app.conf.SystemProfile
import rep.ui.web.UdpServer.addr

object UdpServer {

  val addr:InetSocketAddress = new InetSocketAddress("192.168.2.202", SystemProfile.getUdpServicePort)

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
      //TODO 把接收到的数据转为交易
      //#listener
      socket ! Udp.Send(data, remote) // example server echoes back
//    case Udp.Unbind  => socket ! Udp.Unbind
//    case Udp.Unbound => context.stop(self)
  }
}
