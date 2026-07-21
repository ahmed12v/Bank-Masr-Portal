export interface CityListReq {
  Country: string
  Password: string
  UserName: string
}



export interface CityListRes {
  CityListLocation: CityListLocation[]
  code: string
  description: string
}

export interface CityListLocation {
  CityCode: string
  CityName: string
  Province: string
}
