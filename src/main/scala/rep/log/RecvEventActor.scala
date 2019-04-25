package rep.log

import rep.network.Topic
import rep.protos.peer._
import akka.stream.actor._
import akka.actor.{Props,Address,Actor,ActorRef,Terminated}
import akka.cluster.pubsub.DistributedPubSub
import akka.cluster.pubsub.DistributedPubSubMediator.{Publish, Subscribe}
import akka.cluster.Cluster
import akka.cluster.ClusterEvent._
import akka.cluster.MemberStatus
import rep.ui.web.EventServer
import rep.network.tools.PeerExtension
import rep.storage._
import akka.stream.Graph
import scala.collection.mutable.{HashSet,Set}
import rep.log.RecvEventActor.{Register}
import rep.network.util.NodeHelp

object RecvEventActor {
    def props: Props = Props[RecvEventActor]
    
  final case class Register(actorRef: ActorRef)


}

class RecvEventActor extends Actor  {
  var stageActor : ActorRef = null
  var stageActors : HashSet[ActorRef] = HashSet[ActorRef]()
  val cluster = Cluster(context.system)
  
  
  override def preStart(): Unit ={
    val mediator = DistributedPubSub(context.system).mediator
    mediator ! Subscribe(Topic.Event, self)   
  }
  
  private def clusterInfo(stageActor:ActorRef)={
    cluster.state.members.foreach(m=>{
        if (m.status == MemberStatus.Up){
          if(NodeHelp.isCandidatorNode(m.roles)){
            stageActor ! new Event(NodeHelp.getNodeName(m.roles), Topic.Event, Event.Action.MEMBER_UP)
          }
        }
      })
  }
  
  override def receive = {
    case Register(actorRef) => {
      //this.stageActor = actorRef
      this.stageActors.add(actorRef)
      context.watch(actorRef)
      clusterInfo(actorRef)
      val pe = PeerExtension(context.system)
      self ! new Event( pe.getBlocker.blocker.toString, "", Event.Action.CANDIDATOR) 
    }

    case Terminated(actorRef) => {
      //this.stageActor = null
      this.stageActors.remove(actorRef)
      context.unwatch(actorRef)
      
      //context.stop(self)
    }

    case evt: Event => {
      //if(this.stageActor != null) this.stageActor ! evt
      this.stageActors.foreach(f=>f ! evt)
    }
  }
}

