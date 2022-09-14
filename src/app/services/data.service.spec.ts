import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Account } from '../interfaces';

import { DataService } from './data.service';
import { environment } from 'src/environments/environment';

describe('DataService', () => {
  let service: DataService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [DataService]
    });
    
    service = TestBed.inject(DataService); 
    controller = TestBed.inject(HttpTestingController); 
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should be able to get user accounts from API', () => {
  //   const accounts: Account[] = [ {
  //     "createdAt": "2022-09-11T08:44:28.995Z",
  //     "name": "Esther Buckridge",
  //     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/370.jpg",
  //     "password": "RYQajunckDxKvnF",
  //     "email": "Efrain_Lang@gmail.com",
  //     "id": "1"
  //   },
  //   {
  //     "createdAt": "2022-09-11T21:01:22.631Z",
  //     "name": "Bruce Denesik",
  //     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/842.jpg",
  //     "password": "CjVJlgeImU3h5Q8",
  //     "email": "Orpha.Wunsch@hotmail.com",
  //     "id": "2"
  //   }];

  //     service.processData('accounts').subscribe(accounts => {
  //       expect(accounts.length).toBe(2);
  //       expect(accounts).toEqual(accounts);
  //     })

  //   const request = controller.expectOne(`${environment.baseURL}accounts`);

  //   expect(request.request.method).toBe('GET');

  //   request.flush(accounts)
  // });

  it('should have return data from API', ()=>{
        const accounts: Account[] = [ {
      "createdAt": "2022-09-11T08:44:28.995Z",
      "name": "Esther Buckridge",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/370.jpg",
      "password": "RYQajunckDxKvnF",
      "email": "Efrain_Lang@gmail.com",
      "id": "1"
    },
    {
      "createdAt": "2022-09-11T21:01:22.631Z",
      "name": "Bruce Denesik",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/842.jpg",
      "password": "CjVJlgeImU3h5Q8",
      "email": "Orpha.Wunsch@hotmail.com",
      "id": "2"
    }];

    service.processData('accounts').subscribe(accounts_get =>{
      expect(accounts_get.length).toBe(2);
      expect(accounts_get).toEqual(accounts);

      
    });

    const request = controller.expectOne(`${environment.baseURL}accounts`);

    expect(request.request.method).toBe('GET');

  });


});
