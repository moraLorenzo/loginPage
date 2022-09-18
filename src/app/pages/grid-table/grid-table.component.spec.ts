import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { DataService } from 'src/app/services/data.service';

import { GridTableComponent } from './grid-table.component';

describe('GridTableComponent', () => {
  let component: GridTableComponent;
  let fixture: ComponentFixture<GridTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridTableComponent ],
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

  //for casesensitivity

  // it('should cover the casesensitive function', () =>{
  //   expect(component.).toBeFalsy();
  //   component.updateExactSearch();

  //   // expect(component.caseSensitive).toBeTruthy();
  // });

  
// it('should call a function during another function', () => {
//   const spy = spyOn(component, 'getData');

//   component.loadData();

//   expect(spy).toHaveBeenCalledWith();
// })


});
