import { inject, Injectable } from '@angular/core';
import { ApiService } from '../apiService/api-service';
import { environment } from '../../environment/environment';
import { ProductListReq } from '../../interfaces/product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductList {


    private api = inject(ApiService);
  private apiUrl = `${environment.baseUrl}`;

  TrackingAWB(body: ProductListReq): Observable<any> {
    return this.api.post<any>(`${this.apiUrl}/Tracking`, body);
  }
}
