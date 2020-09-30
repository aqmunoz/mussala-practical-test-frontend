import { Peripheral } from './peripheral';
import { Gateway } from './gateway';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint: string = 'http://localhost:8000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }  

  // Add gateway
  AddGateway(data: Gateway): Observable<any> {
    let API_URL = `${this.endpoint}/gateway`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  AddPeripheral(data: Peripheral): Observable<any> {
    let API_URL = `${this.endpoint}/peripheral`;    
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all gateways
  GetGateways() {
    return this.http.get(`${this.endpoint}/gateways`);
  }

  // Get all peripherals
  GetPeripherals(id) {
    let API_URL = `${this.endpoint}/gateway/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: Gateway) => {          
          return res;
        }),
        catchError(this.errorMgmt)
      )    
  }

  // Delete gateway
  DeleteGateway(id): Observable<any> {
    var API_URL = `${this.endpoint}/gateway/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Delete peripheral
  DeletePeripheral(id): Observable<any> {
    var API_URL = `${this.endpoint}/peripheral/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  GetGateway(id): Observable<any>{
    var API_URL = `${this.endpoint}/gateway/${id}`;
    return this.http.get(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }


  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    alert(errorMessage);
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
