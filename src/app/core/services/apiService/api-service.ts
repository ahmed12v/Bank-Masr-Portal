import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {


  private http = inject(HttpClient);

  get<T>(url: string, params?: HttpParams) {
    return this.http.get<T>(url, { params });
  }

  post<T>(url: string, body: unknown) {
    return this.http.post<T>(url, body);
  }

  put<T>(url: string, body: unknown) {
    return this.http.put<T>(url, body);
  }

  patch<T>(url: string, body: unknown) {
    return this.http.patch<T>(url, body);
  }

  delete<T>(url: string) {
    return this.http.delete<T>(url);
  }
}
