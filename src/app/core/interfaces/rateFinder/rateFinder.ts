export interface RateFinderReq {
  UserName: string
  Password: string
  Destination: string
  Dimension: string
  Origin: string
  PaymentMethod: string
  ServiceType: string
  Product: string
  Weight: number
  NoofPeices: number
}
export interface RateFinderRes {
  Code: number
  Description: string
  Freight: number
  Fuel: number
  NetAmount: number
  Tax: number
  Vat: number
}
