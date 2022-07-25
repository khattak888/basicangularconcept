import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthDropdownlistComponent } from './month-dropdownlist.component';

describe('MonthDropdownlistComponent', () => {
  let component: MonthDropdownlistComponent;
  let fixture: ComponentFixture<MonthDropdownlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthDropdownlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthDropdownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
