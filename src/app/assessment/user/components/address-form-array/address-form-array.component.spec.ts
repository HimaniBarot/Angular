import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormArrayComponent } from './address-form-array.component';

describe('AddressFormArrayComponent', () => {
  let component: AddressFormArrayComponent;
  let fixture: ComponentFixture<AddressFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressFormArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
