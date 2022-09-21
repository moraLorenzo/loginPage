import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Account } from '../interfaces';

import { DataService } from './data.service';
import { environment } from 'src/environments/environment';
import { UserTable } from '../interfaces/users';

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

  it('should have return data from API', () => {
    const accounts: Account[] = [{
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

    service.processData('accounts').subscribe(accounts_get => {
      expect(accounts_get.length).toBe(2);
      expect(accounts_get).toEqual(accounts);


    });

    const request = controller.expectOne(`${environment.baseURL}accounts`);

    expect(request.request.method).toBe('GET');

  });


  //Get Product
  it('should call getProducts and return an array of Products', () => {
    const products = [{
      "createdAt": "2022-09-14T13:28:18.486Z",
      "product_name": "Unbranded Granite Chicken",
      "product_price": "74.00",
      "product_adj": "Ergonomic",
      "product_material": "Steel",
      "product_desc": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      "producer": "Wilkinson - Greenfelder",
      "city": "Long Beach",
      "country": "Buckinghamshire",
      "id": "1"
    },
    {
      "createdAt": "2022-09-15T01:16:59.178Z",
      "product_name": "Unbranded Wooden Chair",
      "product_price": "619.00",
      "product_adj": "Licensed",
      "product_material": "Soft",
      "product_desc": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      "producer": "Schowalter - Cummings",
      "city": "Camden",
      "country": "Borders",
      "id": "2"
    },];
    // 1
    service.getProduct().subscribe((res) => {
      //2
      expect(res).toEqual(products);
    });

    //3
    const req = controller.expectOne({
      method: 'GET',
      url: `${environment.baseURL}products`,
    });

    //4
    req.flush(products);
  });


  //For Adding users
  it('should call addUsers and return the insert user information from the API', () => {
    const accountEntry: UserTable[] = [{
      "createdAt": "2022-09-14T18:11:32.595Z",
      "name": "Jonathan NewBie",
      "address": "06688 Jaleel Mountains",
      "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
      "email": "Grant_Collier19@example.com",
      "phone": "696.221.2802 x729",
      "jobTitle": "International Brand Officer",
      "id": "99"
    }];

    service.addUsers(accountEntry).subscribe((data) => {
      expect(data).toEqual(accountEntry);
    });

    const req = controller.expectOne({
      method: 'POST',
      url: `${environment.tagURL}getDataTable`,
    });

    req.flush(accountEntry);

    controller.verify();
  });

  it('sample deleter user testing', ()=>{
    let user_id = 1;
    service.deleteUsers(user_id).subscribe((data:any) => {
      expect(data).toBe(user_id);
    });

    const req = controller.expectOne({
      method: 'DELETE',
      url:`${environment.tagURL}/getDataTable/${user_id}`,
    });

    req.flush(user_id);

    controller.verify();
  });
});
