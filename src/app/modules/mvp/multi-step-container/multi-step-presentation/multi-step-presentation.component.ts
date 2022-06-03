import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Crud, CrudService } from 'src/app/modules/crud-practice/services/crud.service';

@Component({
  selector: 'app-multi-step-presentation',
  templateUrl: './multi-step-presentation.component.html',
  styles: [
  ]
})
export class MultiStepPresentationComponent implements OnInit {

  public step = 1;
  public multi_steps = false;
  public empForm: FormGroup;

  constructor(
    private _crudService: CrudService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.generateForm();
  }

  /**
   * @name next
   * @description Increase step count by 1 on next button click.
   */
  public next() {
    if (this.step == 1 || this.step == 2) {
      this.multi_steps = true;
      this.step++;
    }
  }

  /**
   * @name previous
   * @description Decrease step count by 1 on previous button click.
   */
  public previous() {
    this.step--;
    if (this.step == 1) {
      this.multi_steps = false;
    }
  }

  /**
   * @name generateForm
   * @description Builds the form.
   */
  public generateForm(): void {
    this.empForm = this.fb.group({
      firstName: [''],
      email: [''],
      contactNumber: [''],
      company: [''],
      address: [''],
    });
  }

  /**
   * @name onSubmit
   * @description Adds form value on submit button.
   * @returns 
   */
  public onSubmit(): void {
    this._crudService.create(this.empForm.value);
    alert("Data added..");
    console.log(this.empForm.value);
    this.reset();
  }

  /**
   * @name reset
   * @description Reset the form.
   */
  public reset() {
    this.empForm.reset();
  }

  /**
   * @name getControls
   * @description Gets the form controls.
   */
  public get getControls() {
    return this.empForm['controls'];
  }

}
