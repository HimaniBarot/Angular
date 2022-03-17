import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Crud, CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss'],
})
export class CrudFormComponent implements OnInit {

  // private idToEdit: number;
  public empForm: FormGroup;
  data$: Observable<Crud[]>;

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.generateForm();
    // this.editData();
    this.data$ = this.crudService.list$;
  }

  generateForm(): void {
    this.empForm = this.fb.group({
      name: [''],
      email: [''],
      company: ['']
    });
  }

  onSubmit(): void {
    this.crudService.create(this.empForm.value);
    console.log(this.empForm.value);
    // this.data$ = this.crudService.list$;
    // this.empForm.get("val")?.setValue("");
  }
  // onSubmit(): void {
  //   if (this.idToEdit) {
  //     this.crudService.editData(this.idToEdit, this.empForm.value);
  //     this.router.navigateByUrl('/crud-practice/crud-list');
  //   }
  // }

  // editData(){
  //   this.idToEdit = parseInt(this.activatedRoute.snapshot.params['id']);
  //   if (this.idToEdit) {
  //     let temp = this.crudService.getById(this.idToEdit);
  //     if (temp == undefined) {
  //       temp = {
  //         id: 0,
  //         name: '',
  //         email: '',
  //         company: ''
  //       };
  //     }
  //     this.empForm.patchValue(temp);
  //   }
  // }
}
