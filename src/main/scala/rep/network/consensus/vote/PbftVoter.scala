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

package rep.network.consensus.vote

/**
 * @created zhaohuanjun 2020-03
*/
trait PbftVoter extends VoterBase {
  case class randomNumber(var number:Long,var generateSerial:Int)

  override def blocker(nodes: Array[String], position:Int): String = {
    if(nodes.nonEmpty){
      var pos = position
      if(position >= nodes.size){
        pos = position % nodes.size
      }
      nodes(pos)
    }else{
      null
    }
  }

  //zhj
  override def candidators(Systemname:String,hash:String,nodes: Set[String], seed: Array[Byte]): Array[String] = {
    var nodesSeq = nodes.toSeq.sortBy(f => (f))
    var len = nodes.size
    var candidate = new Array[String](len)
    for (j <- 0 until len) {
      candidate(j) = nodesSeq(j)
    }
    candidate
  }
}
