export interface InternationalServiceListReq {
  Country: string
  Password: string
  UserName: string
}

export interface InternationalServiceListRe {
  MasterListCodes: MasterListCode[]
  code: string
  description: string
}

export interface MasterListCode {
  CodeID: string
  CodeName: string
}
