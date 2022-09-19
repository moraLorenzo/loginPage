import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';


import { LoginComponent } from './login.component';
import { Account } from '../../interfaces/index';
import {of} from 'rxjs';
import { IRenderer_$type } from 'igniteui-angular-core';

import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import * as _ from 'lodash';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [DataService, 
        { provide: Router, useValue: Router }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Get All Accounts',()=>{
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    spyOn(component, 'getAccounts').and.callThrough();
    const service = fixture.debugElement.injector.get(DataService);

    let accounts: Account[] = [{
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
    },
    {
      "createdAt": "2022-09-11T11:51:47.226Z",
      "name": "Miss Virginia Boyer",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1179.jpg",
      "password": "WNcsY7vXlAxbqJv",
      "email": "Shaun_Von33@hotmail.com",
      "id": "3"
    },];
    spyOn(service, 'processData').and.returnValue(of(accounts));
    component.getAccounts();
  });

  it('Click AddMessages',()=>{
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    spyOn(component, 'submit').and.callThrough();
    component.addMessages();
  });

  it('Click AddMessages',()=>{
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    spyOn(component, 'addMessages').and.callThrough();
    component.addMessages();
  });

  it("should check if email is valid",()=>{
    fixture.detectChanges();

    fixture.whenStable().then(()=>{
        let email = component.loginForm.controls['email'];
        expect(email.valid).toBeTruthy();

        expect(email.touched).toBeFalse();
        expect(email.errors).toBeTrue();
    })
  });

  it("should check if password is valid",()=>{
    fixture.detectChanges();

    fixture.whenStable().then(()=>{
        let password = component.loginForm.controls['password'];

        expect(password.touched).toBeFalse();
        expect(password.errors).toBeTrue();
    })
  });

  //Should cover the submit button
  it("should submit the form and check the inputs", ()=>{

    let filtered_array = [ {
      "createdAt": "2022-09-11T08:44:28.995Z",
      "name": "Esther Buckridge",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/370.jpg",
      "password": "12345678",
      "email": "Efrain_Lang@gmail.com",
      "id": "1"
     }];

     let accounts: Account[] = [{
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
    },
    {
      "createdAt": "2022-09-11T11:51:47.226Z",
      "name": "Miss Virginia Boyer",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1179.jpg",
      "password": "WNcsY7vXlAxbqJv",
      "email": "Shaun_Von33@hotmail.com",
      "id": "3"}];

    //  expect(submit.filtered_array).toEqual(filtered_array);

    spyOn(component, 'submit').and.callThrough();
   
    component.submit();

    component.filtered_array = filtered_array;
    component.accounts = accounts;
    expect(component.filtered_array).not.toBe([]);

    component.addMessages();

    // let navspy = spyOn(router, "navigateByUrl");
    // component.submit();
    // expect(navspy).toHaveBeenCalledWith('nav/home/1');
  });

  it('should navigate to home page',()=>{
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    spyOn(component, 'validate').and.callThrough();
  });

  it('should get all users data', () => {
    const service = fixture.debugElement.injector.get(DataService);

    let filtered_array = [ {
      "createdAt": "2022-09-11T08:44:28.995Z",
      "name": "Esther Buckridge",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/370.jpg",
      "password": "12345678",
      "email": "Efrain_Lang@gmail.com",
      "id": "1"
     }];

   
    // const mySpy = spyOn(_, "filter").and.returnValue(of(filtered_array));
    // component.rowAdded(eventData);
    // expect(mySpy).toBeTrue()
  });




});
