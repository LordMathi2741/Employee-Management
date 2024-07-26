import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpCommonService<T> {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers:  new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred:', error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  get<T>(route:string):Observable<T> {
    return this.http.get<T>(environment.apiUrl + "/" + route, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }
  delete<T>(route:string, id:number):Observable<T> {
    return this.http.delete<T>(environment.apiUrl + "/" + route + "/" + id, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }
  post<T>(route:string, body:any):Observable<T> {
    return this.http.post<T>(environment.apiUrl + "/" + route, JSON.stringify(body), this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }
  put<T>(route:string, body:any, id:number):Observable<T> {
    return this.http.put<T>(environment.apiUrl + "/" + route + "/" + id, JSON.stringify(body), this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }
}
