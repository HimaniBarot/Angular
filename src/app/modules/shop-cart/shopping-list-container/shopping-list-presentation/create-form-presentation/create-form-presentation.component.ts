import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ShoppingCart } from '../../../model/shopCart.model';
import { CreateFormPresenterService } from '../create-form-presenter/create-form-presenter.service';

@Component({
  selector: 'app-create-form-presentation',
  templateUrl: './create-form-presentation.component.html',
  styleUrls: ['./create-form-presentation.component.scss'],
  viewProviders: [CreateFormPresenterService]
})
export class CreateFormPresentationComponent implements OnInit {

  @Output() public sendListToAdd: EventEmitter<any>;
  @Output() public closeForm: EventEmitter<Event>;
  
  public shoppingForm: FormGroup;
  public shoppingList: ShoppingCart[];

  constructor(private _createFormPresenter: CreateFormPresenterService) { 
    this.shoppingList = [];
    this.sendListToAdd = new EventEmitter();
    this.closeForm = new EventEmitter();
  }

  ngOnInit(): void {
    this.props();
  }

  public props(){
    this.shoppingForm = this._createFormPresenter.buildForm();
  }

  public onSubmit(){
    // this._createFormPresenter.onSubmit();
    this.shoppingList.push(this.shoppingForm.value);
    this.onReset();
    // this.sendListToAdd.emit(this.shoppingForm.value);
  }

  onReset(){
    this.shoppingForm.reset();
  }

  onCancel(){
    this.closeForm.emit();
  }

  public onSaveList(){
    // this.sendListToAdd.emit(this.shoppingForm.value);
    console.log("ok");
    this._createFormPresenter.createOverlay();
  }

}
