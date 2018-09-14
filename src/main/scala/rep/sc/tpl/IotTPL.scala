package rep.sc.tpl

import org.json4s._
import org.json4s.jackson.JsonMethods._
import org.json4s.jackson.Serialization._
import org.json4s.JsonDSL._
import rep.sc.contract._
import rep.sc.tpl.IotModel.IotData

/**
  * Iot合约
  */

class IotTPL extends IContract{

  implicit val formats = DefaultFormats

//  val iot_alias =" "              //设备别名
//  val iot_data_gps =" "           //位置信息
//  val iot_data_temprature =" "    //温度
//  val iot_data_time =" "          //时间


  def init(ctx: ContractContext){
    println(s"tid: $ctx.t.txid")
  }

  /**
    * 注册用户证书
    * @param ctx
    * @param data
    * @return
    */
  def signUp(ctx: ContractContext, data:Map[String,String]):Object = {
    var addr = ""
    for((k,v) <- data){
      ctx.api.check(ctx.t.cert.toStringUtf8,ctx.t)
      addr = ctx.api.signup(k,v)
    }
    addr
  }

  /**
    * 存iotdata
    * @param ctx
    * @param data
    * @return
    */
  def putIotData(ctx: ContractContext, data:Map[String,String]):Object={
    val iot_uniq = read[IotData](data("iotdata")).id + "_" + ctx.t.txid
    //先检查该索引key是否已经存在,如果已存在,抛异常
    val k = iot_uniq
    var pv = ctx.api.getVal(k)
    if(pv != null)
      throw new Exception("[" + k + "]已存在，当前值[" + pv + "]")
    val data_sign = Map("iotdata" -> data("iotdata"), "signature" -> data("signature"))
    val v = render(data_sign)
    print(v)
    ctx.api.setVal(k, v)
    print("put_IotData:" + k + ":" + v)
    "put_iotData ok"
  }

  /**
    * 将 id 与cid 键值对存下来
    * 目前接收的是用map键值对构造的json
    * @param ctx
    * @param data
    * @return
    */
  def putId_Cid(ctx: ContractContext, data:Map[String,String]): Object = {
    for ((id, cid) <- data) {
      ctx.api.check(ctx.t.cert.toStringUtf8,ctx.t)
      val k = id + "_cid"
      val pv = ctx.api.getVal(k)
      // 不允许覆盖，允许通过交易替换
      if(pv != null)
        throw new Exception("[" + k + "]已存在，当前值[" + pv + "]")
      ctx.api.setVal(k, cid) // 目前一个id对应一个cid
    }
    "put id_cid ok"
  }

  /**
    * 将 id 与 addr 键值对存下来，其实也可以用cid 与 addr 键值对
    * 目前接收的是用map键值对构造的json
    * @param ctx
    * @param data
    * @return
    */
  def putId_CertAddr(ctx: ContractContext, data:Map[String,String]): Object = {
    for ((id, certAddr) <- data) {
      ctx.api.check(ctx.t.cert.toStringUtf8,ctx.t)
      val k = id + "_addr"
      val pv = ctx.api.getVal(k)
      // 不允许覆盖，允许通过交易替换
      if(pv != null)
        throw new Exception("[" + k + "]已存在，当前值[" + pv + "]")
      ctx.api.setVal(k, certAddr) // 目前一个id对应一个certAddr
    }
    "put id_certAddr ok"
  }

  /**
    *
    * @param ctx
    * @param k
    * @return
    */
  def retrival(ctx: ContractContext, k:String):Object= {
    val v = ctx.api.getVal(k).toString()
    v
  }

  /**
    * 根据action,找到对应的method，并将传入的json字符串parse为method需要的传入参数
    * @param ctx
    * @param action
    * @param sdata
    * @return
    */
  def onAction(ctx: ContractContext,action:String, sdata:String ):Object={

    val json = parse(sdata)

    action match {
      case "put_iotData" =>
        println(s"put_iotData")
        putIotData(ctx, json.extract[Map[String,String]])
      case "putId_Cid" =>
        println(s"put_id_cid")
        putId_Cid(ctx, json.extract[Map[String,String]])
      case "putId_CertAddr" =>
        println(s"put_id_certAddr")
        putId_CertAddr(ctx, json.extract[Map[String,String]])
      case "signUp"=>
        println(s"signUp")
        signUp(ctx, json.extract[Map[String,String]])
      case "retrival"=>
        println(s"retrival")
        retrival(ctx, json.extract[String])
    }
  }
}
