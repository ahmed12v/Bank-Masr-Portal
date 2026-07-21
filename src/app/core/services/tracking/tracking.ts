import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { ApiService } from '../apiService/api-service';
import { TrackingAWBReq,  TrackinRes } from '../../interfaces/tracking/tracking';
import { Observable } from 'rxjs';
import { TrackInfoRes } from '../../interfaces/tracking/responseTrack';

@Injectable({
  providedIn: 'root',
})
export class Trackingser {



    private api = inject(ApiService);
    private apiUrl = `${environment.baseUrl}`;


 TrackingAWB(body:TrackingAWBReq): Observable<TrackInfoRes> {
    return this.api.post<TrackInfoRes>(`https://egxpress.me/IconnectSecure/IntegraOntrackService.svc/TrackDetails`,body);
  }
 TrackingByShipperRef (body:TrackingAWBReq ): Observable<TrackInfoRes> {
    return this.api.post<TrackInfoRes>(`${this.apiUrl}/Tracking`,body);
  }

}
