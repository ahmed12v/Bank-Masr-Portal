export interface AirwayBillPDFFormatReq {
  AccountNo: string
  AirwayBillNumber: string
  Country: string
  Password: string
  RequestUser: string
  UserName: string
}



export interface CreateAWBRes {
  AirwayBillNumber: string
  Code: number
  Description: string
}
export interface CreateAirwayBill {
  UserName: string
  Password: string
  AccountNo: string
  AirwayBillData: AirwayBillData
}

export interface AirwayBillData {
  AirWayBillCreatedBy: string
  CODAmount: number
  CODCurrency: string
  Destination: string
  DutyConsigneePay: number
  GoodsDescription: string
  NumberofPeices: number
  Origin: string
  ProductType: string
  ReceiversAddress1: string
  ReceiversAddress2: string
  ReceiversCity: string
  ReceiversCompany: string
  ReceiversContactPerson: string
  ReceiversCountry: string
  ReceiversEmail: string
  ReceiversGeoLocation: string
  ReceiversMobile: string
  ReceiversPhone: string
  ReceiversPinCode: string
  ReceiversProvince: string
  ReceiversSubCity: string
  SendersAddress1: string
  SendersAddress2: string
  SendersCity: string
  SendersCompany: string
  SendersContactPerson: string
  SendersCountry: string
  SendersEmail: string
  SendersGeoLocation: string
  SendersMobile: string
  SendersPhone: string
  SendersPinCode: string
  SendersSubCity: string
  ServiceType: string
  ShipmentDimension: string
  ShipmentInvoiceCurrency: string
  ShipmentInvoiceValue: number
  ShipperReference: string
  ShipperVatAccount: string
  SpecialInstruction: string
  Weight: number
}
