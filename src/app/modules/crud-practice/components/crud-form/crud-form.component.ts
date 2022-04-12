import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Crud, CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
})
export class CrudFormComponent implements OnInit {

  private idToEdit: number;
  public empForm: FormGroup;

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.generateForm();
    this.crudService.listToEdit$.subscribe((res) => {
      // console.log(res);
      this.idToEdit = res.id;
      this.empForm.patchValue(res);
    })
  }

  generateForm(): void {
    this.empForm = this.fb.group({
      name: [''],
      email: [''],
      company: ['']
    });
  }

  onSubmit(): void {
    if (this.idToEdit) {
      this.crudService.updateData(this.idToEdit, this.empForm.value);
      alert("Data updated..");
    }else{
      this.crudService.create(this.empForm.value);
      alert("Data added..");
    }
    this.reset();
  }

  reset() {
    this.empForm.reset();
  }
}
