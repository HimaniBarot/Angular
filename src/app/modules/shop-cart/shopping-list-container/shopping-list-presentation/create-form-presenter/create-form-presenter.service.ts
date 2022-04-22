import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShoppingCart } from '../../../model/shopCart.model';

@Injectable({
  providedIn: 'root'
})
export class CreateFormPresenterService {

  public createForm: FormGroup;
  public shoppingList: ShoppingCart[];

  constructor(private _fb: FormBuilder) { }
  
  public buildForm(){
    return this._fb.group({
      name: [""],
      email: [""]
    })
  }

  public onSubmit(){
    // this.shoppingList.push(this.shoppingList);
    // console.log(this.shoppingList);
    console.log(this.createForm);
    console.log(this.createForm.value);
    this.shoppingList.push(this.createForm.value);
  }
}
