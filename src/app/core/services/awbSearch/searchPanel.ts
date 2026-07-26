import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { searchPanelReq, TrackingResponseSearchawb } from "../../interfaces/AWBSearch/awbSearchinterface";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class searchPanelService{
    http=inject(HttpClient)

    searchNowPanel(searchPanelReq:searchPanelReq):Observable<TrackingResponseSearchawb>
    {
        return this.http
        .post<TrackingResponseSearchawb>(
            `https://egxpress.me/IconnectSecure/IntegraOntrackService.svc/AWBSearchDetailed`,searchPanelReq
        )
    }

}