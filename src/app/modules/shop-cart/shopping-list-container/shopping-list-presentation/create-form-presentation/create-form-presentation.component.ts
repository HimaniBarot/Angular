import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreateFormPresenterService } from '../create-form-presenter/create-form-presenter.service';

@Component({
  selector: 'app-create-form-presentation',
  templateUrl: './create-form-presentation.component.html',
  styleUrls: ['./create-form-presentation.component.scss'],
  viewProviders: [CreateFormPresenterService]
})
export class CreateFormPresentationComponent implements OnInit {

  constructor(private _createFormPresenter: CreateFormPresenterService) { }

  ngOnInit(): void {
    this.props();
  }

  public shoppingForm: FormGroup;

  public props(){
    this.shoppingForm = this._createFormPresenter.buildForm();
  }

  public onSubmit(){
    this._createFormPresenter.onSubmit();
  }

  onReset(){
    this.shoppingForm.reset();
  }

}
