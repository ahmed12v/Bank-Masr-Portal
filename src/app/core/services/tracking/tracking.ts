import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { ApiService } from '../apiService/api-service';
import { TrackingAWBReq,  TrackinRes } from '../../interfaces/tracking/tracking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Tracking {



    private api = inject(ApiService);
    private apiUrl = `${environment.baseUrl}`;


 TrackingAWB(body:TrackingAWBReq): Observable<TrackinRes> {
    return this.api.post<TrackinRes>(`${this.apiUrl}/Tracking`,body);
  }
 TrackingByShipperRef (body:TrackingAWBReq ): Observable<TrackinRes> {
    return this.api.post<TrackinRes>(`${this.apiUrl}/Tracking`,body);
  }



}
