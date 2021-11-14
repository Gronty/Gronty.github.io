import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByPaymentComponent } from './filter-by-payment.component';

describe('FilterByPaymentComponent', () => {
  let component: FilterByPaymentComponent;
  let fixture: ComponentFixture<FilterByPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
