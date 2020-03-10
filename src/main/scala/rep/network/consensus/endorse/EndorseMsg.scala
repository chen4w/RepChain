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

package rep.network.consensus.endorse

import akka.actor.Address
import rep.protos.peer._

object EndorseMsg {
  
  case object ResultFlagOfEndorse{
    val BlockerSelfError = 1
    val CandidatorError = 2
    val BlockHeightError = 3
    val VerifyError  = 4
     val EnodrseNodeIsSynching = 5
    val success = 0
  }
  
  //背书请求者消息
  case class RequesterOfEndorsement(blc: Block, blocker: String, endorer: Address)
  
  case class ResendEndorseInfo(endorer: Address)

  //zhj EndorsementInfo => MsgPbftPrePrepare
  //给背书人的背书消息
  case class MsgPbftPrePrepare(senderPath:String,block: Block, blocker: String)

  //背书收集者消息
  case class CollectEndorsement(blc: Block, blocker: String)

  //zhj
  case class MsgPbftPrepare(senderPath:String,result: Int, block:Block, blocker: String, prepare: MPbftPrepare, chainInfo : BlockchainInfo)
  case class MsgPbftCommit(senderPath:String,block: Block, blocker: String, commit: MPbftCommit, chainInfo : BlockchainInfo)
  case class MsgPbftReply(block: Block, reply: MPbftReply, chainInfo : BlockchainInfo)
  case class MsgPbftReplyOk(block: Block)


  //背书请求者返回的结果
  //case class ResultOfEndorseRequester(result: Boolean, endor: Signature, BlockHash: String, endorser: Address)

}