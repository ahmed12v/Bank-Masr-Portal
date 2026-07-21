export interface TrackingAWBReq {
  UserName: string
  Password: string
  AccountNo: string
  TrackingAWB: string
}


export interface TrackinRes {
  AirwayBillTrackList: AirwayBillTrackList[]
  Code: number
  Description: string
}

export interface AirwayBillTrackList {
  AirWayBillNo: string
  Consignee: string
  Destination: string
  ForwardingNumber: string
  LastStatus: string
  NoofPieces: string
  Origin: string
  ShipmentProgress: number
  Shipper: string
  ShipperReference: string
  TrackingLogDetails: TrackingLogDetail[]
  Weight: string
}

export interface TrackingLogDetail {
  ActivityDate: string
  ActivityTime: string
  DeliveredTo: string
  Location: string
  Remarks: string
  Status: string
}





