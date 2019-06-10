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

// file operations proof storage
package rep.sc.fops

import org.json4s.DefaultFormats
import org.json4s.jackson.JsonMethods.parse
import org.json4s.jackson.Serialization.write
import rep.protos.peer.ActionResult
import rep.sc.scalax.{ContractContext, IContract, ContractException}

final case class  DeliveryAndStorageProof(
    fileID: String, 
    hash: String,
    hashAlg: String,
    name: String,
    size: Int,
    uploadTimestamp: BigInt,
    storageTimestamp: BigInt,
    ownerCreditID: String,
    ownerCertName: String,
    request: String,
    signature: String,
    signAlg: String
)

final case class DeliveryAndStorageProofWithTxid(
    proof: DeliveryAndStorageProof,
    txid: String
)

final case class AccessAuthAlteringProof(
    fileID: String, 
    accessAuthID: String,
    objectUserID: String,
    accessAuthority: Int,
    accessRestrictionType: String,
    accessRestrictionContent: String,
    accessPostProofStorage: Int,
    requesterCreditID: String,
    requesterCertName: String,
    timestamp: BigInt,
    request: String,
    signature: String,
    signAlg: String,
)
final case class AccessAuthAlteringProofWithTxid(
    proof: AccessAuthAlteringProof,
    txid: String
)

final case class DownloadingProof(
    fileID: String, 
    requesterCreditID: String,
    requesterCertName: String,
    timestamp: BigInt,
    request: String,
    signature: String,
    signAlg: String,
)
final case class DownloadingProofWithTxid(
    proof: DownloadingProof,
    txid: String
)

class FilOpsProSto extends IContract{

    val delimiter = "+"
    implicit val formats = DefaultFormats

    override def init(ctx: ContractContext): Unit = {
        println(s"tid: $ctx.t.id")
    }

    /**
    * 存证文件交付存储操作
    *
    * @param ctx 
    * @param data
    * @return
    */
    def fileDeliverAndStore(ctx: ContractContext, data: DeliveryAndStorageProof): ActionResult = {
        val pv:Any = ctx.api.getVal(data.fileID)
        if(pv != null) 
            throw ContractException(s"文件上传交付存储行为 ${data.fileID} 已存在，无法存证该操作， 当前值为 $pv")

        val proofWithTxid = DeliveryAndStorageProofWithTxid(data, ctx.t.id)
        val value = write(proofWithTxid)
        // val value = write(data)
        ctx.api.setVal(data.fileID, value)
        println("Stored proof: "+ data.fileID + ": " + value)

        null
    }

    /**
    * 存证文件访问权限更新操作
    *
    * @param ctx 
    * @param data
    * @return
    */
    def fileAccessAuthAlter(ctx: ContractContext, data: AccessAuthAlteringProof): ActionResult = {
        var pv:Any = ctx.api.getVal(ctx.t.id)
        if(pv != null) 
            throw ContractException(s"文件访问权限更新行为 ${ctx.t.id} 已存在，无法存证该操作，当前值为 $pv")
        pv = ctx.api.getVal(data.fileID)
        if(pv == null)
            throw ContractException(s"文件上传交付存储 ${data.fileID} 不存在, 无法存证文件访问权限更新操作")

        // val proofWithTxid = AccessAuthAlteringProofWithTxid(data, ctx.t.id)
        // val value = write(proofWithTxid)
        val value = write(data)
        ctx.api.setVal(ctx.t.id, value)
        println("Stored proof: "+ ctx.t.id + ": " + value)
        null
    }

    /**
    * 存证文件下载操作
    *
    * @param ctx 
    * @param data
    * @return
    */
    def fileDownload(ctx: ContractContext, data: DownloadingProof): ActionResult = {
        var pv:Any = ctx.api.getVal(ctx.t.id)
        if(pv != null) 
            throw ContractException(s"文件下载行为 ${ctx.t.id} 已存在，无法存证该操作，当前值为 $pv")
        pv = ctx.api.getVal(data.fileID)
        if(pv == null)
            throw ContractException(s"文件上传交付存储 ${data.fileID} 不存在, 无法存证文件访问权限更新操作")
        
        // val proofWithTxid = DownloadingProofWithTxid(data, ctx.t.id)
        // val value = write(proofWithTxid)
        val value = write(data)
        ctx.api.setVal(ctx.t.id, value)
        println("Stored proof: "+ ctx.t.id + ": " + value)
        null
    }

    override def onAction(ctx: ContractContext, action: String, sdata: String): ActionResult = {
        implicit val formats = DefaultFormats
        //println("-----------"+sdata)
        val json = parse(sdata)

        println("-----------"+sdata)
        action match {
            case "fileDeliverAndStore" =>
                fileDeliverAndStore(ctx, json.extract[DeliveryAndStorageProof])
            case "fileAccessAuthAlter" =>
                fileAccessAuthAlter(ctx, json.extract[AccessAuthAlteringProof])
            case "fileDownload" =>
                fileDownload(ctx, json.extract[DownloadingProof])
        }
    }
}