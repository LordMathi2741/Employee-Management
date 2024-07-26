import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpCommonService<T> {
  constructor(private http: HttpClient) {}

  get<T>(route:string) {
    return this.http.get<T>(environment.apiUrl + "/" + route).pipe();
  }
  delete<T>(route:string, id:number) {
    return this.http.delete<T>(environment.apiUrl + "/" + route + "/" + id).pipe();
  }
  post<T>(route:string, body:any) {
    return this.http.post<T>(environment.apiUrl + "/" + route, body).pipe();
  }
  put<T>(route:string, body:any, id:number) {
    return this.http.put<T>(environment.apiUrl + "/" + route + "/" + id, body).pipe();
  }
}
