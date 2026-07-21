import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../apiService/api-service';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { LoginRequest, LoginResponse } from '../../../interfaces/Login/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private api = inject(ApiService);
    private apiUrl = `${environment.baseUrl}`;


 login(body:LoginRequest ):Observable<LoginResponse> {
    return this.api.post<LoginResponse>(`${this.apiUrl}/GetIConnectLogin`,body);

  }


}
