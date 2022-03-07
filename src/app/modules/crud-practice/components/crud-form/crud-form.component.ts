import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss'],
})
export class CrudFormComponent implements OnInit {

  private idToEdit: number;
  public empForm: FormGroup;

  constructor(
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.generateForm();
    this.idToEdit = parseInt(this.activatedRoute.snapshot.params['id']);
    if (this.idToEdit) {
      let temp = this.crudService.getById(this.idToEdit);
      if (temp == undefined) {
        temp = {
          id: 0,
          name: '',
          email: '',
          company: ''
        };
      }
      this.empForm.patchValue(temp);
    }
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
      this.crudService.editData(this.idToEdit, this.empForm.value);
      this.router.navigateByUrl('/crud-practice/crud-list');
    }
  }
}
