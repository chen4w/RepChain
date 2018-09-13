package rep.sc.tpl

object IotModel {

  /**
    * Iot设备上报数据
    * @param iotAlias  设备别名
    * @param gps  gps数据
    * @param temprature  温度数据
    * @param time  设备上传数据的时间
    */
  case class IotDataBack(iotAlias :String, gps: String, temprature :Int, time: String)

  /**
    * 目前iot上报的数据
    * @param id 设备编号id
    * @param ti 时间
    * @param te 温度*100
    * @param hu 湿度*100
    * @param lo 经度*1000000
    * @param la 纬度*1000000
    */
  case class IotData(id:String, ti:String, te:String, hu:String, lo:String, la:String)

  /**
    * 需要上链的两个参数
    * @param iotdata  iot上报的数据
    * @param signature  原始签名信息的十六进制字符串
    */
  case class IotPut(iotdata: String, signature: String)

  /**
    * 管理员put相应设备的id与cid键值对
    * @param id 设备参数
    * @param cid  对应的合约cid
    */
  case class IdCid(id: String, cid: String)

}
