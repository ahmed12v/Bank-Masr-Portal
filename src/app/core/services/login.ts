import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface, LoginResponse, UserCredentials } from '../interfaces/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http:HttpClient) {}

  SubmitLogin(LoginInterface:LoginInterface):Observable<any> {
    return this.http.post(`https://egxpress.me/IconnectSecure/IntegraOntrackService.svc/GetIConnectLogin`, LoginInterface );
  }

}
