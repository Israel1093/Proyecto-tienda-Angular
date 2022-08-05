import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { BASE_URL } from '../models/constanst';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  //baseUrl = 'https://fakestoreapi.com/products';
  baseUrl= environment.baseUrl+'products/';
  endpoint:string= '';

  headers= new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient,
   @Inject(BASE_URL) endpoint:string) { 
    this.endpoint = endpoint;
   }

  getBrands():Observable<any> {
    let apiUrl= `${this.endpoint}/products`;
    console.log(apiUrl);
    
    return this.http.get(apiUrl);
  }

  getBrandById(code:string):Observable<any> {
    let apiUrl= `${this.endpoint}/products/${code}`;
    console.log(apiUrl);
    
    return this.http.get(apiUrl);
  }

  createBrand(data: any):Observable<any>{
    let apiUrl= `${this.endpoint}/products`;
    console.log(apiUrl);
    return this.http.post(apiUrl, data).pipe(catchError(this.error));
  }

  updateBrand(data: any):Observable<any>{
    let apiUrl= `${this.endpoint}/products`;
    return this.http.put(apiUrl, data).pipe(catchError(this.error));
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else  {
      errorMessage = `Codigo error: ${error.status} mensaje: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(() =>{
      return errorMessage;
    });
  }

}
