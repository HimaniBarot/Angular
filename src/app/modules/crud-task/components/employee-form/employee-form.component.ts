import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/shared/models/department.model';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {

  @Output() close : EventEmitter<Event>;
  @Output() onSubmitData : EventEmitter<Event>;

  constructor(
    private fb: FormBuilder,
    private service: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.onSubmitData = new EventEmitter<Event>();
    this.close = new EventEmitter<Event>();
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    this.buildRegistrationForm();
    // console.log(this.registrationForm);

    this.getDepartmentOption();
    this.getPatchValue();
  }

  departments: Department[];
  employeeList: Employee[];

  registrationForm: FormGroup;
  id: number;
  isAdd: boolean;

  buildRegistrationForm() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      contactNumber: [],
      gender: [''],
      dateOfEmployment: [''],
      deparmentList: [],
    });
  }

  // ADD EMPLOYEE DATA

  saveData() {
    // console.log("form")
    const saveEmployee = this.registrationForm.value;

    if (this.registrationForm.status == 'VALID') {
      this.service.addEmployeeData(saveEmployee).subscribe(() => {
        // alert('Data saved successfully...');
        this.onSubmitData.emit(this.registrationForm.value);
        this.onclose();
        // this.router.navigate(['/crud-task/list-view']);
      });
    } else {
      alert('Please fill the form correctly...');
    }
  }

  onSubmit() {
    // console.log("onsubmit click");    
    if (this.isAdd) {
      this.saveData();
    } else {
      this.upadteEmployee();
    }
  }

  // GET DEPARTMENT LIST
  getDepartmentOption() {
    this.service.getDepartment().subscribe(
      (departmentOption) => {
        this.departments = departmentOption;
      },
      () => {
        alert('Something went wrong');
      }
    );
  }

  getPatchValue() {
    this.isAdd = !this.id;
    if (!this.isAdd) {
      this.service
        .getById(this.id)
        .subscribe((data) => this.registrationForm.patchValue(data));
    }
  }

  upadteEmployee() {
    this.service
      .updateEmployeeData(this.id, this.registrationForm.value)
      .subscribe(() => {
        alert('Data updated successfully...');
        // this.router.navigate(['/crud-task/list-view/']);
        this.onSubmitData.emit(this.registrationForm.value);
        this.onclose();
      });
  }

  get getValues() {
    return this.registrationForm['controls'];
  }

  resetForm() {
    this.registrationForm.reset();
  }

  onclose() {
    // console.log('close click');
    this.close.emit();
  }
}
