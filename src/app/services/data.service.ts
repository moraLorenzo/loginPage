import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { lastValueFrom, Observable } from 'rxjs';
import { Account } from '../interfaces';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/products';
@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient) {
  }

  processData(endPoint:string){
    const categories =  this.http.get<Account[]>(environment.baseURL + endPoint);
    return categories;
  }

  getProduct(){
    const categories =  this.http.get<Product[]>(environment.baseURL + 'products');
    return categories;
  }

  // getData(endPoint:string){
  //   return this.http.get<Account[]>(this.baseURL + endPoint);
  // }

  // public  get(endpoint: string){
  //   return this.http.get<Account[]>(this.baseURL + endpoint);

  // }

}
