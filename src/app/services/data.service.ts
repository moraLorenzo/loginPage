import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { lastValueFrom, Observable } from 'rxjs';
import { Account } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseURL = 'https://631ed0fb58a1c0fe9f58a438.mockapi.io/test/v1/';

  constructor(private http: HttpClient) {
  }

  // async processData(endPoint:string){
  //   const categories$ =  this.http.get(this.baseURL + endPoint);
  //   return await lastValueFrom(categories$);
  // }

  processData(endPoint:string){
    const categories =  this.http.get<Account[]>(this.baseURL + endPoint);
    return categories;
  }

  getData(endPoint:string){
    return this.http.get<Account[]>(this.baseURL + endPoint);
  }

  public  get(endpoint: string){
    return this.http.get<Account[]>(this.baseURL + endpoint);

  }

}
