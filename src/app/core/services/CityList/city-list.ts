import { inject, Injectable } from '@angular/core';
import { ApiService } from '../apiService/api-service';
import { environment } from '../../environment/environment';
import { CityListReq, CityListRes } from '../../interfaces/city/city';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityList {



    private api = inject(ApiService);
    private apiUrl = `${environment.baseUrl}`;


 TrackingAWB(body:CityListReq): Observable<CityListRes> {
    return this.api.post<CityListRes>(`${this.apiUrl}/Tracking`,body);
  }

}
