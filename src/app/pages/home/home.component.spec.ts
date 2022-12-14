import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';
import { Account } from '../../interfaces/index';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent],
      imports: [HttpClientModule,RouterTestingModule],
      providers: [DataService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Get All Accounts',()=>{
    fixture = TestBed.createComponent(HomeComponent);
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
    component.getAccounts(1);
    // expect(component.getAccounts).toEqual(accounts[0]);
  });

});
