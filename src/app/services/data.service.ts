import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseURL = 'https://631ed0fb58a1c0fe9f58a438.mockapi.io/test/v1/';

  constructor(private http: HttpClient) {
  }

  async processData(){
    const categories$ =  this.http.get(this.baseURL + 'accounts');
    return await lastValueFrom(categories$);
  }

}
