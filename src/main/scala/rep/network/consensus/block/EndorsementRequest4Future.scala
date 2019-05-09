/*
 * Copyright  2019 Blockchain Technology and Application Joint Lab, Linkel Technology Co., Ltd, Beijing, Fintech Research Center of ISCAS.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BA SIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package rep.network.consensus.block

import akka.util.Timeout
import scala.concurrent.duration._
import akka.pattern.ask
import akka.pattern.AskTimeoutException
import scala.concurrent._

import akka.actor.{ Actor, ActorRef, Props, Address, ActorSelection }
import com.google.protobuf.ByteString
import com.google.protobuf.timestamp.Timestamp
import rep.app.conf.{ SystemProfile, TimePolicy }
import rep.network.base.ModuleBase
import rep.network.consensus.endorse.EndorseMsg.{ EndorsementInfo, ResultOfEndorsed, RequesterOfEndorsement, ResultOfEndorseRequester, ResultFlagOfEndorse }
import rep.network.tools.PeerExtension
import rep.network.Topic
import rep.protos.peer._
import rep.utils._
import akka.pattern.AskTimeoutException
import rep.network.consensus.util.BlockVerify
import scala.util.control.Breaks
import rep.utils.GlobalUtils.{ EventType, ActorType }
import rep.network.sync.SyncMsg.StartSync
import rep.log.RepLogger

object EndorsementRequest4Future {
  def props(name: String): Props = Props(classOf[EndorsementRequest4Future], name)
}

class EndorsementRequest4Future(moduleName: String) extends ModuleBase(moduleName) {
  import context.dispatcher
  import scala.collection.breakOut
  import scala.concurrent.duration._

  implicit val timeout = Timeout(TimePolicy.getTimeoutEndorse seconds)
  private val endorsementActorName = "/user/modulemanager/endorser"

  override def preStart(): Unit = {
    RepLogger.info(RepLogger.Consensus_Logger, this.getLogMsgPrefix( "EndorsementRequest4Future Start"))
  }

  private def ExecuteOfEndorsement(addr: Address, data: EndorsementInfo): ResultOfEndorsed = {
    try {
      val selection: ActorSelection = context.actorSelection(toAkkaUrl(addr, endorsementActorName));
      val future1 = selection ? data
      RepLogger.trace(RepLogger.Consensus_Logger, this.getLogMsgPrefix( s"--------ExecuteOfEndorsement waiting resultheight=${data.blc.height},local height=${pe.getCurrentHeight}"))
      Await.result(future1, timeout.duration).asInstanceOf[ResultOfEndorsed]
    } catch {
      case e: AskTimeoutException =>
        RepLogger.trace(RepLogger.Consensus_Logger, this.getLogMsgPrefix( s"--------ExecuteOfEndorsement timeout,height=${data.blc.height},local height=${pe.getCurrentHeight}"))
        null
      case te: TimeoutException =>
        RepLogger.trace(RepLogger.Consensus_Logger, this.getLogMsgPrefix( s"--------ExecuteOfEndorsement java timeout,height=${data.blc.height},local height=${pe.getCurrentHeight}"))
        null
    }
  }

  private def toAkkaUrl(addr: Address, actorName: String): String = {
    return addr.toString + "/" + actorName;
  }

  private def EndorsementVerify(block: Block, result: ResultOfEndorsed): Boolean = {
    val bb = block.clearEndorsements.toByteArray
    val ev = BlockVerify.VerifyOneEndorseOfBlock(result.endor, bb, pe.getSysTag)
    if (ev._1) {
      true
    } else {
      false
    }
  }

  private def handler(reqinfo: RequesterOfEndorsement) = {
    schedulerLink = clearSched()
    val result = this.ExecuteOfEndorsement(reqinfo.endorer, EndorsementInfo(reqinfo.blc, reqinfo.blocker))
    if (result != null) {
      if (result.result == ResultFlagOfEndorse.success) {
        if (EndorsementVerify(reqinfo.blc, result)) {
          val re = ResultOfEndorseRequester(true, result.endor, result.BlockHash, reqinfo.endorer)
          context.parent ! re
          RepLogger.trace(RepLogger.Consensus_Logger, this.getLogMsgPrefix( s"--------endorsementRequest4Future, send endorsement, height=${reqinfo.blc.height},local height=${pe.getCurrentHeight} "))
        } else {
          RepLogger.trace(RepLogger.Consensus_Logger, this.getLogMsgPrefix(s"--------endorsementRequest4Future recv endorsement result is error, result=${result.result},height=${reqinfo.blc.height},local height=${pe.getCurrentHeight}"))
          context.parent ! ResultOfEndorseRequester(false, null, reqinfo.blc.hashOfBlock.toStringUtf8(), reqinfo.endorer)
        }
      } else {
        if (result.result == ResultFlagOfEndorse.BlockHeightError) {
          if (result.endorserOfChainInfo.height > pe.getCurrentHeight + 1) {
            pe.getActorRef(ActorType.synchrequester) ! StartSync(false)
            context.parent ! ResultOfEndorseRequester(false, null, reqinfo.blc.hashOfBlock.toStringUtf8(), reqinfo.endorer)
            RepLogger.trace(RepLogger.Consensus_Logger, this.getLogMsgPrefix( s"--------endorsementRequest4Future recv endorsement result must synch,height=${reqinfo.blc.height},local height=${pe.getCurrentHeight} "))
          } else {
            schedulerLink = scheduler.scheduleOnce(TimePolicy.getTimeoutEndorse seconds, self, RequesterOfEndorsement(reqinfo.blc, reqinfo.blocker, reqinfo.endorer))
          }
        } else {
          context.parent ! ResultOfEndorseRequester(false, null, reqinfo.blc.hashOfBlock.toStringUtf8(), reqinfo.endorer)
        }
      }
    } else {
      RepLogger.trace(RepLogger.Consensus_Logger, this.getLogMsgPrefix(s"--------endorsementRequest4Future recv endorsement result is null,height=${reqinfo.blc.height},local height=${pe.getCurrentHeight} "))
      context.parent ! ResultOfEndorseRequester(false, null, reqinfo.blc.hashOfBlock.toStringUtf8(), reqinfo.endorer)
    }
  }

  override def receive = {
    case RequesterOfEndorsement(block, blocker, addr) =>
      handler(RequesterOfEndorsement(block, blocker, addr))

    //case ResultOfEndorsed(result, endor, blockhash)=>
    //  handlerOfResult(ResultOfEndorsed(result, endor, blockhash))
    case _ => //ignore
  }
}