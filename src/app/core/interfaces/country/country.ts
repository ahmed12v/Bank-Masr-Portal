export interface CountryListReq {
  Country: string //
  Password: string
  UserName: string
}


export interface CountryListRes {
  CountryListLocation: CountryListLocation[]
  code: string
  description: string
}

export interface CountryListLocation {
  CountryCode: string
  CountryName: string
}