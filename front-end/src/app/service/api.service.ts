import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AppError } from "../error/appError";

type requestOptions = {
  headers:HttpHeaders
}
@Injectable({
  providedIn: "root"
})

export class ApiService {
  baseUrl = 'http://localhost:3333/api/v1';

  constructor(private http:HttpClient){}
  private handleError(error: HttpErrorResponse): Observable<never> {
      const errorMessage = error.error.message || error.statusText || "Unknown error";
      console.error(`API Error: ${errorMessage}`, error);
    return throwError(() => new AppError( errorMessage, error.status));
  }
  

  get<T>(path:string, options?: requestOptions):Observable<T>{
    const  completeUrl = `${this.baseUrl}${path}`
    return this.http.get<T>(completeUrl,options).pipe(catchError(this.handleError))
  }

  post<T>(path:string,body:unknown,options?:requestOptions):Observable<T>{
    const completeUrl = `${this.baseUrl}${path}`
    return this.http.post<T>(completeUrl,body,options).pipe(catchError(this.handleError))
  }

  put<T>(path:string,body=null,options?: requestOptions):Observable<T>{
    const completeUrl = `${this.baseUrl}${path}`
    return this.http.put<T>(completeUrl,body, options).pipe(catchError(this.handleError))
  }
  
  patch<T>(path:string,body=null,options?: requestOptions):Observable<T>{
    const completeUrl = `${this.baseUrl}${path}`
    return this.http.patch<T>(completeUrl,body, options).pipe(catchError(this.handleError))
  }

  delete<T>(path:string, options?: requestOptions):Observable<T>{
    const completeUrl = `${this.baseUrl}${path}`
    return this.http.delete<T>(completeUrl,options).pipe(catchError(this.handleError))
  }
  
  
}