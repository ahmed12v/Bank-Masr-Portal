import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { GetAccountDetials } from "../../interfaces/compliant/qaury";
import { Observable } from "rxjs";
import { GetAccountDetialsResponse, GetNewCompainDetails, GetNewCompainDetailsResoponse, MasterListSelector, MasterListSelectorResponse } from "../../interfaces/raiseComplain/raiseInterfaces";

@Injectable({
    providedIn: 'root',
})
export class RaiseService{
    private http = inject(HttpClient)

    getAccountDetails(detials:GetAccountDetials):Observable<GetAccountDetialsResponse>{
        return this.http.post<GetAccountDetialsResponse>
        (`https://egxpress.me/IconnectSecure/IntegraOntrackService.svc/GetAccountDetails`,detials)
    }

    getComplianNumber(GetNewCompainDetailsNumber:GetNewCompainDetails):Observable<GetNewCompainDetailsResoponse>{
        return this.http.post<GetNewCompainDetailsResoponse>
        (`https://egxpress.me/IconnectSecure/IntegraOntrackService.svc/GetNewComplaintNo`,GetNewCompainDetailsNumber)
    }

    getMasterTypeSelector(selector:MasterListSelector):Observable<MasterListSelectorResponse>{
        return this.http.post<MasterListSelectorResponse>
       (`https://egxpress.me/IconnectSecure/IntegraOntrackService.svc/MasterList`,selector)
    }
}