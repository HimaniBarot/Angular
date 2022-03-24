import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDataPresentationComponent } from './filter-data-presentation.component';

describe('FilterDataPresentationComponent', () => {
  let component: FilterDataPresentationComponent;
  let fixture: ComponentFixture<FilterDataPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterDataPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDataPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
