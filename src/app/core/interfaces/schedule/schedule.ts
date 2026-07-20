export interface SchedulePickupReq {
  UserName: string
  Password: string
  AccountNo: string
  BookingData: BookingData
}
export interface BookingData {
  BookingCreatedBy: string
  BookingCompanyName: string
  BookingAddress1: string
  BookingAddress2: string
  BookingContactPerson: string
  BookingCountry: string
  BookingEmail: string
  BookingMobileNo: string
  BookingPhoneNo: string
  BookingCity: string
  Destination: string
  DutyConsigneePay: number
  PackageType: string
  GoodsDescription: string
  NumberofPeices: number
  NumberofShipments: number
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
  SendersDepartment: string
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
  BusinessClosingTime: string
  ShipmentReadyDate: string
  ShipmentReadyTime: string
  SpecialInstruction: string
  AppoximateWeight: number
}

export interface SchedulePickupRes {
  Code: number
  Description: string
  PickupRequestNo: string
}

