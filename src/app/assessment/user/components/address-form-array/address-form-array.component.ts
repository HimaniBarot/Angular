import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form-array',
  templateUrl: './address-form-array.component.html',
  styleUrls: ['./address-form-array.component.scss']
})
export class AddressFormArrayComponent implements OnInit {

  public userForm: FormGroup;
  public addAddress: FormArray = this.fb.array([]);
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.buildFormArray();
    this.addNewaddress();
  }

  buildFormArray() {
    this.userForm = this.fb.group({
      address: this.addAddress
    });
  }

  // Address formarray
  addNewaddress() {
    this.addAddress.push(this.addAddressField());
  }
  addAddressField() {
    return this.fb.group({
      address: [''],
    });
  }

  deleteAddress(index: number) {
    if (this.addAddress.length != 1) {
      this.addAddress.removeAt(index);
    }
  }

}
