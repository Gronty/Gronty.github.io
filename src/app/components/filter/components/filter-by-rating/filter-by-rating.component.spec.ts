import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByRatingComponent } from './filter-by-rating.component';

describe('FilterByRatingComponent', () => {
  let component: FilterByRatingComponent;
  let fixture: ComponentFixture<FilterByRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
