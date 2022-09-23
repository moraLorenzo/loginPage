import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Account } from '../interfaces';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/products';

import { UserTable } from '../interfaces/users';
import { Employee } from '../interfaces/employee';


@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient) {
  }

  processData(endPoint:string): Observable<Account[]>{
    return this.http.get<Account[]>(environment.baseURL + endPoint);
  }

  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(environment.baseURL + 'products');
  }

  getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(environment.baseURL + 'employees');
  }

  public  getUsers(): Observable<UserTable[]>{
    return this.http.get<UserTable[]>(environment.baseURL + 'getDataTable' );

  }

  public addUsers(userData: UserTable[]): Observable<UserTable[]>{
    return this.http.post<UserTable[]>(environment.baseURL + 'getDataTable', userData)
  }

    public putUsers(id: number, userData: UserTable[]): Observable<UserTable[]>{
    return this.http.put<UserTable[]>(`${environment.baseURL}getDataTable/${id}`, userData)
  }

  public deleteUsers(id: number): Observable<UserTable[]>{
    return this.http.delete<UserTable[]>(`${environment.baseURL}getDataTable/${id}`)
  }
}
