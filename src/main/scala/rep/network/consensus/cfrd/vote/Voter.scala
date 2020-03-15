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

package rep.network.consensus.cfrd.vote

import akka.actor.{ Actor, Address, Props }
import rep.app.conf.{ SystemProfile, TimePolicy, SystemCertList }
import rep.crypto.Sha256
import rep.network.base.ModuleBase
import rep.protos.peer.BlockchainInfo
import rep.storage.ImpDataAccess
import rep.utils.GlobalUtils.{  BlockEvent, BlockerInfo, NodeStatus }
import com.sun.beans.decoder.FalseElementHandler
import rep.network.util.NodeHelp
import rep.network.consensus.cfrd.block.Blocker.{ CreateBlock }
import rep.network.sync.SyncMsg.StartSync
import rep.network.consensus.cfrd.block.GenesisBlocker.GenesisBlock
import rep.log.RepLogger
import rep.network.module.cfrd.CFRDActorType

object Voter {

  def props(name: String): Props = Props(classOf[Voter], name)

  case object VoteOfBlocker
  case object VoteOfForce

}

class Voter(moduleName: String) extends ModuleBase(moduleName) with CRFDVoter {

  import context.dispatcher
  import scala.concurrent.duration._

  override def preStart(): Unit = {
    RepLogger.info(RepLogger.Vote_Logger, this.getLogMsgPrefix("Vote module start"))
  }

  val dataaccess: ImpDataAccess = ImpDataAccess.GetDataAccess(pe.getSysTag)

  //private var BlockHashOfVote: String = null
  private var candidator: Array[String] = Array.empty[String]
  private var Blocker: BlockerInfo = BlockerInfo("", -1, 0l, "", -1)
  private var voteCount = 0
  private var HeightOfBlocked : String = ""

  def checkTranNum: Boolean = {
    pe.getTransPoolMgr.getTransLength() >= SystemProfile.getMinBlockTransNum
  }

  private def cleanVoteInfo = {
    this.voteCount = 0
    //this.BlockHashOfVote = null
    candidator = Array.empty[String]
    this.Blocker = BlockerInfo("", -1, 0l, "", -1)
    pe.resetBlocker(this.Blocker)
  }

  private def getSystemBlockHash: String = {
    if (pe.getCurrentBlockHash == "") {
      pe.resetSystemCurrentChainStatus(dataaccess.getBlockChainInfo())
    }
    pe.getCurrentBlockHash
  }

  private def resetCandidator(currentblockhash: String) = {
    //this.BlockHashOfVote = pe.getCurrentBlockHash
    candidator = candidators(pe.getSysTag, currentblockhash, SystemCertList.getSystemCertList, Sha256.hash(currentblockhash))
    //pe.getNodeMgr.resetCandidator(candidatorCur)
  }

  private def resetBlocker(idx: Int, currentblockhash: String, currentheight: Long) = {
    if(SystemProfile.getNumberOfEndorsement == 1){
      pe.setConfirmHeight(0)
      pe.setCreateHeight(0)
    }
    
    RepLogger.trace(RepLogger.Vote_Logger, this.getLogMsgPrefix(s"sysname=${pe.getSysTag},votelist=${candidator.toArray[String].mkString("|")},idx=${idx}"))
    this.Blocker = BlockerInfo(blocker(candidator.toArray[String], idx), idx, System.currentTimeMillis(), currentblockhash, currentheight)
    pe.resetBlocker(this.Blocker)
    NoticeBlockerMsg
  }

  private def NoticeBlockerMsg = {
    if (this.Blocker.blocker.equals(pe.getSysTag)) {
      //发送建立新块的消息
      pe.getActorRef(CFRDActorType.ActorType.blocker) ! CreateBlock
    }
  }

  private def DelayVote = {
    this.voteCount += 1
    var time = this.voteCount * TimePolicy.getVoteRetryDelay
    schedulerLink = clearSched()
    schedulerLink = scheduler.scheduleOnce(TimePolicy.getVoteRetryDelay.millis, self, Voter.VoteOfBlocker)
  }

  private def vote4One = {
    
    if(this.Blocker.blocker == ""){
      val maxinfo = pe.getStartVoteInfo
      var currentblockhash:String = ""
      var currentheight : Long = 0
      if(maxinfo.height > 0){
        currentblockhash = maxinfo.hash
        currentheight = maxinfo.height
      }else{
        currentblockhash = pe.getCurrentBlockHash
        currentheight = pe.getCurrentHeight
      }
      if(currentheight > 0){
        this.cleanVoteInfo
        this.resetCandidator(currentblockhash)
        this.resetBlocker(0, currentblockhash, currentheight)
      }
      RepLogger.trace(RepLogger.Vote_Logger, this.getLogMsgPrefix(s"sysname=${pe.getSysTag},first voter,currentHeight=${currentheight},currentHash=${currentblockhash}" + "~" + selfAddr))
    }else if((this.Blocker.VoteHeight +SystemProfile.getBlockNumberOfRaft) <= pe.getMaxHeight4SimpleRaft){
      RepLogger.trace(RepLogger.Vote_Logger, this.getLogMsgPrefix(s"sysname=${pe.getSysTag},second voter,currentHeight=${pe.getMaxHeight4SimpleRaft}" + "~" + selfAddr))
      val block = dataaccess.getBlock4ObjectByHeight(this.Blocker.VoteHeight +SystemProfile.getBlockNumberOfRaft)
      if(block != null){
        val currentblockhash = block.hashOfBlock.toStringUtf8()
        val currentheight = block.height
        this.cleanVoteInfo
        this.resetCandidator(currentblockhash)
        this.resetBlocker(0, currentblockhash, currentheight)
        RepLogger.trace(RepLogger.Vote_Logger, this.getLogMsgPrefix(s"sysname=${pe.getSysTag},read block voter,currentHeight=${this.Blocker.VoteHeight +SystemProfile.getBlockNumberOfRaft},currentHash=${currentblockhash}" + "~" + selfAddr))
      }else{
        RepLogger.trace(RepLogger.Vote_Logger, this.getLogMsgPrefix(s"sysname=${pe.getSysTag},second voter in synch,currentHeight=${this.Blocker.VoteHeight +SystemProfile.getBlockNumberOfRaft}" + "~" + selfAddr))
        pe.getActorRef(CFRDActorType.ActorType.synchrequester) ! StartSync(false)
      }
    }else{
      NoticeBlockerMsg
    }
  }
  
  private def vote(isForce:Boolean) = {
    if (checkTranNum || isForce) {
      val currentblockhash = pe.getCurrentBlockHash
      val currentheight = pe.getCurrentHeight
      if (this.Blocker.voteBlockHash == "") {
        this.cleanVoteInfo
        this.resetCandidator(currentblockhash)
        this.resetBlocker(0, currentblockhash, currentheight)
        RepLogger.trace(RepLogger.Vote_Logger, this.getLogMsgPrefix(s"sysname=${pe.getSysTag},first voter,blocker=${this.Blocker.blocker},voteidx=${this.Blocker.VoteIndex}" + "~" + selfAddr))
      } else {
        if (!this.Blocker.voteBlockHash.equals(currentblockhash)) {
          //抽签的基础块已经变化，需要重续选择候选人
          this.cleanVoteInfo
          this.resetCandidator(currentblockhash)
          this.resetBlocker(0, currentblockhash, currentheight)
          RepLogger.trace(RepLogger.Vote_Logger, this.getLogMsgPrefix(s"sysname=${pe.getSysTag},hash change,reset voter,height=${currentheight},hash=${currentblockhash},blocker=${this.Blocker.blocker},voteidx=${this.Blocker.VoteIndex}" + "~" + selfAddr))
        } else {
          if (this.Blocker.blocker == "") {
            this.cleanVoteInfo
            this.resetCandidator(currentblockhash)
            this.resetBlocker(0, currentblockhash, currentheight)
            RepLogger.trace(RepLogger.Vote_Logger, this.getLogMsgPrefix(s"sysname=${pe.getSysTag},blocker=null,reset voter,height=${currentheight},blocker=${this.Blocker.blocker},voteidx=${this.Blocker.VoteIndex}" + "~" + selfAddr))
          } else {
            if ((System.currentTimeMillis() - this.Blocker.voteTime) / 1000 > TimePolicy.getTimeOutBlock) {
              //说明出块超时
              this.voteCount = 0
              this.resetBlocker(this.Blocker.VoteIndex + 1, currentblockhash, currentheight)
              RepLogger.trace(RepLogger.Vote_Logger, this.getLogMsgPrefix(s"sysname=${pe.getSysTag},block timeout,reset voter,height=${currentheight},blocker=${this.Blocker.blocker},voteidx=${this.Blocker.VoteIndex}" + "~" + selfAddr))
            } else {
              NoticeBlockerMsg
            }
          }
        }
      }
    } else {
      RepLogger.trace(RepLogger.Vote_Logger, this.getLogMsgPrefix(s"sysname=${pe.getSysTag},transaction is not enough,waiting transaction,height=${pe.getCurrentHeight}" + "~" + selfAddr))
    }
  }

  private def voteMsgHandler(isForce:Boolean) = {
    if (pe.getNodeMgr.getStableNodes.size >= SystemProfile.getVoteNoteMin) {
      //只有共识节点符合要求之后开始工作
      if (getSystemBlockHash == "") {
        //系统属于初始化状态
        if (NodeHelp.isSeedNode(pe.getSysTag)) {
          // 建立创世块消息
          pe.getActorRef(CFRDActorType.ActorType.gensisblock) ! GenesisBlock
        } else {
          // 发出同步消息
          //pe.setSystemStatus(NodeStatus.Synching)
          //pe.getActorRef(ActorType.synchrequester) ! StartSync
        }
      } else {
        if (!pe.isSynching) {
          if(SystemProfile.getNumberOfEndorsement == 1){
            vote4One
          }else{
            vote(isForce)
          }
        }
      }
    }
    DelayVote
  }

  override def receive = {
    case Voter.VoteOfBlocker =>
      if (NodeHelp.isCandidateNow(pe.getSysTag, SystemCertList.getSystemCertList)) {
        voteMsgHandler(false)
      }
    case Voter.VoteOfForce=>
      voteMsgHandler(true)
     
  }
}