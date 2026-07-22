import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ComplaintResponseParsed, GetAccountDetials } from "../../interfaces/compliant/qaury";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class RaiseService{
    private http = inject(HttpClient)

    getAccountDetails(detials:GetAccountDetials):Observable<ComplaintResponseParsed>{
        return this.http
        .post<ComplaintResponseParsed>(`https://egxpress.me/IconnectSecure/IntegraOntrackService.svc/GetAccountDetails`,detials)
    }
}