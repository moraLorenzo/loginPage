import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Visibility } from 'igniteui-angular-core';
import { of } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { DataService } from 'src/app/services/data.service';

import { ChartComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  let temp: Visibility;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//   beforeEach(()=>{
//     temp =  {
//       visible: true
//     };
// });

it('visibility setting', () =>{
  // let array : any = {visible:true};
  component.ngOnInit();
  expect(component.legendSettings.visible).toBeTruthy();
 });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should check First',()=>{
//     component.legendSettings = temp;
//  });

it('Get All Accounts',()=>{
  fixture = TestBed.createComponent(ChartComponent);
  component = fixture.componentInstance;

  spyOn(component, 'getData').and.callThrough();
  const service = fixture.debugElement.injector.get(DataService);

  let employee: Employee[] = [
    {
     "x": "March",
     "y": 59337.79,
     "id": "1"
    },
    {
     "x": "February",
     "y": 76845.75,
     "id": "2"
    },
    {
     "x": "August",
     "y": 66008.32,
     "id": "3"
    },
    {
     "x": "August",
     "y": 84038.85,
     "id": "4"
    },
    {
     "x": "February",
     "y": 74274.81,
     "id": "5"
    },
    {
     "x": "November",
     "y": 6335.32,
     "id": "6"
    },
    {
     "x": "August",
     "y": 90936.85,
     "id": "7"
    },
    {
     "x": "July",
     "y": 61839.83,
     "id": "8"
    },
    {
     "x": "October",
     "y": 94837.97,
     "id": "9"
    },
    {
     "x": "July",
     "y": 87707.38,
     "id": "10"
    }
   ];
  spyOn(service, 'getEmployee').and.returnValue(of(employee));
  component.getData();

  component.piedata = [
    {
     "x": "March",
     "y": 59337.79,
     "id": "1"
    },
    {
     "x": "February",
     "y": 76845.75,
     "id": "2"
    },
    {
     "x": "August",
     "y": 66008.32,
     "id": "3"
    },
    {
     "x": "August",
     "y": 84038.85,
     "id": "4"
    },
    {
     "x": "February",
     "y": 74274.81,
     "id": "5"
    },
    {
     "x": "November",
     "y": 6335.32,
     "id": "6"
    },
    {
     "x": "August",
     "y": 90936.85,
     "id": "7"
    },
    {
     "x": "July",
     "y": 61839.83,
     "id": "8"
    },
    {
     "x": "October",
     "y": 94837.97,
     "id": "9"
    },
    {
     "x": "July",
     "y": 87707.38,
     "id": "10"
    }
   ];
  expect(component.piedata).toEqual(employee);

});

});
