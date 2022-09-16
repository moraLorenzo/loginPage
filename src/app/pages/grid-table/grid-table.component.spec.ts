import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GridTableComponent } from './grid-table.component';

describe('GridTableComponent', () => {
  let component: GridTableComponent;
  let fixture: ComponentFixture<GridTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridTableComponent ],
      imports: [HttpClientModule, ,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
