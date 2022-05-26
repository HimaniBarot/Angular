import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingCart } from '../../model/shopCart.model';
import { ShoppingListPresenterService } from '../shopping-list-presenter/shopping-list-presenter.service';
import { ViewProductListPresenterService } from './view-product-list-presenter/view-product-list-presenter.service';

@Component({
  selector: 'app-shopping-list-presentation',
  templateUrl: './shopping-list-presentation.component.html',
  styleUrls: ['./shopping-list-presentation.component.scss'],
  viewProviders: [ShoppingListPresenterService]
})
export class ShoppingListPresentationComponent implements OnInit {

  // @Output() public closeForm: EventEmitter<Event>;
  
  // public shoppingForm: FormGroup;//////////////////
  // @Input() public shoppingList: ShoppingCart[];

  // constructor(private _shoppingListPresenter: ShoppingListPresenterService) { 
  //   this.shoppingList = [];
  //   this.closeForm = new EventEmitter();
  // }

  ngOnInit(): void {
  }

  // public props(){
  //   this.shoppingForm = this._shoppingListPresenter.buildForm();
  // }

  // public onSubmit(){
  //   // this._createFormPresenter.onSubmit();
  //   this.shoppingList.push(this.shoppingForm.value);
  //   this.onReset();
  // }

  // onReset(){//////////////
  //   this.shoppingForm.reset();
  // }

  // onCancel(){///////////////
  //   this.closeForm.emit();
  // }

  // public onSaveList(shoppingList: any){
  //   this._shoppingListPresenter.createOverlay(shoppingList);
  // }
  form: FormGroup;
  Data: Array<any> = [
    { name: 'Pear', value: 'pear' },
    { name: 'Plum', value: 'plum' },
    { name: 'Kiwi', value: 'kiwi' },
    { name: 'Apple', value: 'apple' },
    { name: 'Lime', value: 'lime' },
  ];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  public submitForm() {
    console.log(this.form.value);
  }

}
