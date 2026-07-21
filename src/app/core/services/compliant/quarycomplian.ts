import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ComplaintResponse, queryComeٍSearch } from "../../interfaces/compliant/qaury";

@Injectable({
  providedIn: 'root',
})
export class QuaryService{
    private http = inject(HttpClient)

    getQuery(formsearch:queryComeٍSearch):Observable<ComplaintResponse>{
        return this.http
        .post<ComplaintResponse>(`https://egxpress.me/IconnectSecure/IntegraOntrackService.svc/SearchQuery`,formsearch)
    }
}