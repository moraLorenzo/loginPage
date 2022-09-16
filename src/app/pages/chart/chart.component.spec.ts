import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Visibility } from 'igniteui-angular-core';

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

});
