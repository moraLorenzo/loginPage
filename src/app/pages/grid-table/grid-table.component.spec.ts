import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IRowDataEventArgs } from 'igniteui-angular';
import { of } from 'rxjs';
import { UserTable } from 'src/app/interfaces/users';
import { DataService } from 'src/app/services/data.service';
import { GridTableComponent } from './grid-table.component';


describe('GridTableComponent', () => {
  let component: GridTableComponent;
  let fixture: ComponentFixture<GridTableComponent>;
  let IDataEvents = { data: {} }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridTableComponent],
      imports: [HttpClientModule, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GridTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run the rowAdded function', () => {
    component.clearSearch();
    expect(component.searchText).toBe('');
  });

  it('should run the updateExactSearch function', () => {
    component.updateExactSearch();
    expect(component.exactMatch).toBeTruthy();
  });

  it('should run the updateSearch function', () => {
    component.updateSearch();
    expect(component.caseSensitive).toBeTruthy();
  });

  it('should get all users data', () => {
    fixture = TestBed.createComponent(GridTableComponent);
    component = fixture.componentInstance;

    spyOn(component, 'getData').and.callThrough();
    const service = fixture.debugElement.injector.get(DataService);

    let userTable: UserTable[] = [
      {
        "createdAt": "2022-09-14T18:11:32.595Z",
        "name": "Jonathan Nicolasbro",
        "address": "06688 Jaleel Mountains",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
        "email": "Grant_Collier19@example.com",
        "phone": "696.221.2802 x729",
        "jobTitle": "International Brand Officer",
        "id": "2"
      },
      {
        "createdAt": "2022-09-14T20:40:58.685Z",
        "name": "Kerry O'Keefe",
        "address": "7628 Hattie Square",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/477.jpg",
        "email": "Nelson89@example.net",
        "phone": "1-368-322-4603 x931",
        "jobTitle": "Lead Optimization Analyst",
        "id": "3"
      },
      {
        "createdAt": "2022-09-14T12:43:51.264Z",
        "name": "Homer Mueller",
        "address": "5439 Candice Vista",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg",
        "email": "Glenna98@example.net",
        "phone": "678.984.9144 x65110",
        "jobTitle": "International Assurance Manager",
        "id": "4"
      },
      {
        "createdAt": "2022-09-14T23:24:11.835Z",
        "name": "Miss Marta Gerlach",
        "address": "79034 Gerhold Locks",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/719.jpg",
        "email": "Anahi.Kautzer@example.com",
        "phone": "(818) 384-9944 x3144",
        "jobTitle": "District Accountability Producer",
        "id": "5"
      }];
    spyOn(service, 'getUsers').and.returnValue(of(userTable));
    component.getData();

    component.usersTable = userTable;
    expect(component.usersTable).toEqual(userTable);
  });

  it('should add user data', () => {
    let userTable: UserTable[] = [
      {
        "createdAt": "2022-09-14T18:11:32.595Z",
        "name": "Jonathan Nicolasbro",
        "address": "06688 Jaleel Mountains",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
        "email": "Grant_Collier19@example.com",
        "phone": "696.221.2802 x729",
        "jobTitle": "International Brand Officer",
        "id": "2"
      }];

    fixture = TestBed.createComponent(GridTableComponent);
    component = fixture.componentInstance;
    const service = fixture.debugElement.injector.get(DataService);

    spyOn(service, 'addUsers').and.returnValue(of(userTable));
    expect(component.rowAdded(IDataEvents as IRowDataEventArgs)).toBeTruthy();
  });

  it('should delete user data', () => {

    let userTable: UserTable[] = [
      {
        "createdAt": "2022-09-14T18:11:32.595Z",
        "name": "Jonathan Nicolasbro",
        "address": "06688 Jaleel Mountains",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
        "email": "Grant_Collier19@example.com",
        "phone": "696.221.2802 x729",
        "jobTitle": "International Brand Officer",
        "id": "2"
      }];

    fixture = TestBed.createComponent(GridTableComponent);
    component = fixture.componentInstance;

    const service = fixture.debugElement.injector.get(DataService);

    spyOn(service, 'deleteUsers').and.returnValue(of(userTable));
    expect(component.rowDeleted(IDataEvents as IRowDataEventArgs)).toBeTruthy();
  });


});