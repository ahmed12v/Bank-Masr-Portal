import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { ApiService } from '../apiService/api-service';
import { CreateAirwayBill, CreateAWBRes} from '../../interfaces/airWay/Airway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AriWayBill {
  private api = inject(ApiService);
  private apiUrl = `${environment.baseUrl}`;

 CreateAirwayBill(body:CreateAirwayBill ): Observable<CreateAWBRes> {
    return this.api.post<CreateAWBRes>(`${this.apiUrl}/CreateAirwayBill`,body);
  }

}