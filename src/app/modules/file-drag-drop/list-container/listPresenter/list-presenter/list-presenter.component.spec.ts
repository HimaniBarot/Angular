import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPresenterComponent } from './list-presenter.component';

describe('ListPresenterComponent', () => {
  let component: ListPresenterComponent;
  let fixture: ComponentFixture<ListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
