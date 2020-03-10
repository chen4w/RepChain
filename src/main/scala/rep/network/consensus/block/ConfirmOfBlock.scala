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

import akka.actor.{ActorRef, Props}
import akka.util.Timeout
import rep.app.conf.SystemProfile
import rep.log.{RepLogger, RepTimeTracer}
import rep.network.Topic
import rep.network.base.ModuleBase
import rep.network.consensus.block.Blocker.ConfirmedBlock
import rep.network.consensus.util.BlockVerify
import rep.network.persistence.Storager.{BatchStore, BlockRestore, SourceOfBlock}
import rep.utils.GlobalUtils.{ActorType, EventType}

import scala.concurrent._

object ConfirmOfBlock {
  def props(name: String): Props = Props(classOf[ConfirmOfBlock], name)
}

class ConfirmOfBlock(moduleName: String) extends ModuleBase(moduleName) {
  import context.dispatcher

  override def preStart(): Unit = {
    RepLogger.info(RepLogger.Consensus_Logger, this.getLogMsgPrefix("confirm Block module start"))
    SubscribeTopic(mediator, self, selfAddr, Topic.Block, false)
  }
  import rep.protos.peer._

  import scala.concurrent.duration._

  implicit val timeout = Timeout(30.seconds)

  private def asyncVerifyEndorse(e: Signature, byteOfBlock: Array[Byte]): Future[Boolean] = {
    val result = Promise[Boolean]

    val tmp = BlockVerify.VerifyOneEndorseOfBlock(e, byteOfBlock, pe.getSysTag)
    if (tmp._1) {
      result.success(true)
    } else {
      result.success(false)
    }
    result.future
  }

  //zhj
  case class DataSig(data:Array[Byte], sig : Signature)

  private def asyncVerifyEndorses(block: Block): Boolean = {
    val b = block.clearEndorsements.clearReplies.toByteArray

    //zhj
    val ds = scala.collection.mutable.Buffer[DataSig]()
    block.replies.foreach( r => {
        ds += DataSig(r.clearSignature.toByteArray, r.signature.get)
      for (c <- r.commits) {
          ds += DataSig(c.clearSignature.toByteArray, c.signature.get)
          c.prepares.foreach(p=>{
            ds += DataSig(b, p.signature.get)
          })
      }
    })

    /*val listOfFuture: Seq[Future[Boolean]] = block.endorsements.map(x => {
      asyncVerifyEndorse(x, b)
    }) */

    val listOfFuture: Seq[Future[Boolean]] = ds.map(x => {
      asyncVerifyEndorse(x.sig, x.data)
    })

    val futureOfList: Future[List[Boolean]] = Future.sequence(listOfFuture.toList).recover({
      case e: Exception =>
        null
    })

    val result1 = Await.result(futureOfList, timeout.duration).asInstanceOf[List[Boolean]]

    var result = true
    if (result1 == null) {
      result = false
    } else {
      result1.foreach(f => {
        if (!f) {
          result = false
          RepLogger.trace(RepLogger.Consensus_Logger, this.getLogMsgPrefix(s"comfirmOfBlock verify endorse is error, break,block height=${block.height},local height=${pe.getCurrentHeight}"))
        }
      })
    }

    result
  }

  private def handler(block: Block, actRefOfBlock: ActorRef) = {
    //zhj
    RepLogger.trace(RepLogger.Consensus_Logger, this.getLogMsgPrefix(s"confirm verify endorsement start,height=${block.height}"))
    var b = true
    if (SystemProfile.getIsVerifyOfEndorsement)
        b = asyncVerifyEndorses(block)
    if (b) {
        pe.getBlockCacheMgr.addToCache(BlockRestore(block, SourceOfBlock.CONFIRMED_BLOCK, actRefOfBlock))
        pe.getActorRef(ActorType.storager) ! BatchStore
        sendEvent(EventType.RECEIVE_INFO, mediator, pe.getSysTag, Topic.Block, Event.Action.BLOCK_NEW)
    }
  }

  private def checkedOfConfirmBlock(block: Block, actRefOfBlock: ActorRef) = {
    if (pe.getCurrentBlockHash == "" && block.previousBlockHash.isEmpty()) {
      RepLogger.trace(RepLogger.Consensus_Logger, this.getLogMsgPrefix(s"confirm verify blockhash,height=${block.height}"))
      handler(block, actRefOfBlock)
    } else {
      //与上一个块一致
      RepLogger.trace(RepLogger.Consensus_Logger, this.getLogMsgPrefix(s"confirm verify blockhash,height=${block.height}"))

      //zhj
      /* if (SystemProfile.getNumberOfEndorsement == 1) {
        if (block.height > pe.getCurrentHeight + 1) {
          RepLogger.trace(RepLogger.Consensus_Logger, this.getLogMsgPrefix(s"confirm verify height,height=${block.height}，localheight=${pe.getCurrentHeight }"))
          pe.getActorRef(ActorType.synchrequester) ! SyncRequestOfStorager(sender,block.height)
        } else {
          handler(block, actRefOfBlock)
          pe.setConfirmHeight(block.height)
        }
      } else { */
        //zhj
        if ( block.replies.size >= (SystemProfile.getPbftF + 1))
            handler(block, actRefOfBlock)
      //}
    }
  }

  override def receive = {
    //Endorsement block
    case ConfirmedBlock(block, actRefOfBlock) =>
      RepLogger.print(RepLogger.zLogger,pe.getSysTag + ", ConfirmOfBlock recv ConfirmedBlock: " + ", " + block.hashOfBlock)
      RepTimeTracer.setStartTime(pe.getSysTag, "blockconfirm", System.currentTimeMillis(), block.height, block.transactions.size)
      checkedOfConfirmBlock(block, actRefOfBlock)
      RepTimeTracer.setEndTime(pe.getSysTag, "blockconfirm", System.currentTimeMillis(), block.height, block.transactions.size)
    case _ => //ignore
  }

}