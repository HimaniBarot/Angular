import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../models/department.model';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.buildRegistrationForm();
    console.log(this.registrationForm);

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
    const saveEmployee = this.registrationForm.value;

    if (this.registrationForm.status == 'VALID') {
      this.service.addEmployeeData(saveEmployee).subscribe(() => {
        alert('Data saved successfully...');
        this.router.navigate(['/crud-task/list-view']);
      });
    } else {
      alert('Please fill the form correctly...');
    }
  }

  onSubmit() {
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
        this.router.navigate(['/crud-task/list-view/']);
      });
  }

  get getValues() {
    return this.registrationForm['controls'];
  }

  resetForm() {
    this.registrationForm.reset();
  }
}
