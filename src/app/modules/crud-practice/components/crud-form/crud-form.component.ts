import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Brand, User } from '../../models/crud.model';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss'],
})
export class CrudFormComponent implements OnInit {
  brandOptions: Brand[];
  // @Input() brands: Brand[];

  // @Output() createdUser: EventEmitter<User> = new EventEmitter<User>();

  // constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.buidUserForm();
  }

  // getCategoryOptions() {
  //   this.productService.getCategory().subscribe((categoryOption: Category[]) => {
  //     this.categoryOptions = categoryOption;
  //   },(error)=>{
  //     alert("Somethings Went Wrong");
  //   });
  // }

  // form: FormGroup;
  // cities = ['Mohali', 'Chandigarh', 'Ludhiana', 'Amritsar'];
  // zip_codes = ['282001', '456123', '123456', '140412'];

  constructor() {
    //   const defaultCities = ['Mohali', 'Amritsar'];
    //   // const defaultZipCodes = ['456123'];
    //   this.form = this.formBuilder.group({
    //     cities: this.formBuilder.array(
    //       this.cities.map((x) => defaultCities.indexOf(x) > -1)
    //     ),
    //     // zip_codes: this.formBuilder.array(
    //     //   this.zip_codes.map((x) => defaultZipCodes.indexOf(x) > -1)
    //     // ),
    //   });
    // }
    // convertToValue(key: string) {
    //   return this.form.value[key]
    //     .map((x: string, i: string | number) => x && this[key][i])
    //     .filter((x: string) => !!x);
    // }
    // onSubmit() {
    //   const valueToStore = Object.assign({}, this.form.value, {
    //     cities: this.convertToValue('cities'),
    //     // zip_codes: this.convertToValue('zip_codes'),
    //   });
    //   console.log(valueToStore);
    // }
    // public userForm: FormGroup;
    // addressDetailsArray: FormArray = this.fb.array([]);
    // buidUserForm() {
    //   this.userForm = this.fb.group({
    //     name: [''],
    //     email: [''],
    //     contactNo: [],
    //     brand: [],
    //     address: this.addressDetailsArray,
    //   });
    // }
    // addAddress() {
    //   this.addressDetailsArray.push(this.addAddressField());
    // }
    // addAddressField() {
    //   return this.fb.group({
    //     city: [''],
    //     state: [''],
    //     pinCode: [],
    //   });
    // }
    // saveUser() {
    //   const userToSave = this.userForm.value;
    //   if (this.userForm.valid) {
    //     // this.createdUser.emit(userToSave);
    //     this.resetForm();
    //   } else {
    //     console.log('solve Errors');
    //   }
    // }
    // get formControl() {
    //   return this.userForm['controls'];
    // }
    // resetForm() {
    //   this.userForm.reset();
    // }
  }
}
