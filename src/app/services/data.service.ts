import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { lastValueFrom, Observable } from 'rxjs';
import { Account } from '../interfaces';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/products';

import { PageSettingsModel,EditSettingsModel, DataStateChangeEventArgs, DataSourceChangedEventArgs } from '@syncfusion/ej2-angular-grids';
import { UserTable } from '../interfaces/users';
import { Employee } from '../interfaces/employee';


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

  getEmployee(){
    const categories =  this.http.get<Employee[]>(environment.baseURL + 'products');
    return categories;
  }

  addProduct(state: DataSourceChangedEventArgs){
    return this.http.post<Product[]>(environment.baseURL + 'products', state.data);
  }

  public  getUsers(): Observable<UserTable[]>{
    return this.http.get<UserTable[]>(environment.tagURL + 'getDataTable' );

  }

  public addUsers(userData: UserTable[]): Observable<UserTable[]>{
    return this.http.post<UserTable[]>(environment.tagURL + 'getDataTable', userData)
  }

    public putUsers(id: number, userData: UserTable[]): Observable<UserTable[]>{
    return this.http.put<UserTable[]>(`${environment.tagURL}/getDataTable/${id}`, userData)

  }

  public deleteUsers(id: number): Observable<UserTable[]>{
    return this.http.delete<UserTable[]>(`${environment.tagURL}/getDataTable/${id}`)
  }


  // getData(endPoint:string){
  //   return this.http.get<Account[]>(this.baseURL + endPoint);
  // }

  // public  get(endpoint: string){
  //   return this.http.get<Account[]>(this.baseURL + endpoint);

  // }

}
