export interface Complaint {
  CoReg: string;
  ComplaintDate: string;
  Complaint: string;
  AirwayBillNo: string;
  Remarks: string;
  RootCause: string;
  Status: string;
}

export interface ComplaintResponse {
  Code: string;
  Description: string;
  JasonString: string;
}

export interface ComplaintResponseParsed {
  Code: string;
  Description: string;
  JasonString: Complaint[];
}



 export interface queryComeٍSearch {
    DataBase:string,
    DateFrom:string,
    DateTo:string,
    SqlString:string,
    UserID:string,
    AWBno:string,
    InternalStatusCode:string,
    LifecycleStatus:string,
    RegSequenceFrom:string,
    RegSequenceTo:string,
 }