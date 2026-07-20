export interface ShipmentHistoryReq {
  UserName: string
  Password: string
  AccountNo: string
  AirWayBillNo: string
  ShipmentFromDate: string
  ShipmentToDate: string
  Consignee: string
  ConsigneeCity: string
  ConsigneeName: string
  ConsigneePhone: string
  Shipper: string
  ShipperPhone: string
  ShipperReference: string
  ServiceType: string
 
  Country: string

"CreatedUser":"" ,
"ListType":0
}


export interface ShipmentHistoryRes {
  AwbList: AwbList[]
  Code: number
  Description: string
}

export interface AwbList {
  Awbno: string
  Consignee: string
  Content: string
  Dated: string
  Destination: string
  DestinationName: string
  Origin: string
  OriginName: string
  PCS: number
  Rate: number
  ServiceType: string
  Shipper: string
  Weight: number
}
