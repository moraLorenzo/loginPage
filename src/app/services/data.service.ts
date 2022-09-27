import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Account } from '../interfaces';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/products';

import { UserTable } from '../interfaces/users';
import { Employee } from '../interfaces/employee';

/**
 * @ignore
 */
@Injectable({
  providedIn: 'root'
})


export class DataService {


  /**
   * 
   * @param http inject the HTTPClient Dependency
   */
  constructor(private http: HttpClient) {
  }

  /**
   * 
   * @param endPoint this dual function method can accept endPoint in format of endpoint OR endpoint/{id}
   * @returns the retrieved data
   */
  processData(endPoint:string): Observable<Account[]>{
    return this.http.get<Account[]>(environment.baseURL + endPoint);
  }


  /**
   * 
   * @returns all the data from the products table
   */
  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(environment.baseURL + 'products');
  }

  /**
   * 
   * @returns returns all the employee information from the database
   */
  getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(environment.baseURL + 'employees');
  }

  /**
   * 
   * @returns returns all the user information from the database
   */
  public  getUsers(): Observable<UserTable[]>{
    return this.http.get<UserTable[]>(environment.baseURL + 'getDataTable' );

  }

  /**
   * 
   * @param userData contains the whole row information once an attempt to add row is detected
   * @returns the whole row information
   */
  public addUsers(userData: UserTable[]): Observable<UserTable[]>{
    return this.http.post<UserTable[]>(environment.baseURL + 'getDataTable', userData)
  }


  /**
   * 
   * @param id the ID of the row from the Database
   * @param userData contains the new data with the old datas that haven't been changed
   * @returns the new row data
   */
    public putUsers(id: number, userData: UserTable[]): Observable<UserTable[]>{
    return this.http.put<UserTable[]>(`${environment.baseURL}getDataTable/${id}`, userData)
  }

  /**
   * 
   * @param id the ID of the row that is about to be deleted
   * @returns the whole row information
   */
  public deleteUsers(id: number): Observable<UserTable[]>{
    return this.http.delete<UserTable[]>(`${environment.baseURL}getDataTable/${id}`)
  }
}
