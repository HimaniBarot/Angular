import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// --------------------------------------------------------------------------------- /
import { Department } from 'src/app/shared/models/department.model';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {

  @Output() public close : EventEmitter<Event>;
  @Output() public onSubmitData : EventEmitter<Event>;

  constructor(
    private fb: FormBuilder,
    private service: EmployeeService) { 
    this.onSubmitData = new EventEmitter<Event>();
    this.close = new EventEmitter<Event>();
  }

  ngOnInit(): void {
    this.buildRegistrationForm();
    this.getDepartmentOption();
    this.getPatchValue();
  }

  public departments: Department[];
  public employeeList: Employee[];

  public registrationForm: FormGroup;
  public id: number;
  public isAdd: boolean;

  /**
   * @name buildRegistrationForm
   * @description This method builds the form.
   */
  public buildRegistrationForm() {
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
  
  /**
   * @name getDepartmentOption
   * @description This method get the department list.
   */
   public getDepartmentOption() {
    this.service.getDepartment().subscribe(
      (departmentOption) => {
        this.departments = departmentOption;
      },
      () => {
        alert('Something went wrong');
      }
    );
  }

  /**
   * @name onSubmit
   * @description This method checks if the form is in add or edit mode.
   */
  public onSubmit() { 
    if (this.isAdd) {
      this.saveData();
    } else {
      this.upadteEmployee();
    }
  }

  /**
   * @name saveData
   * @description This method saves the employee details if form is valid.
   */
  public saveData() {
    const saveEmployee = this.registrationForm.value;

    if (this.registrationForm.status == 'VALID') {
      this.service.addEmployeeData(saveEmployee).subscribe(() => {
        this.onSubmitData.emit(this.registrationForm.value);
        this.onclose();
      });
    } else {
      alert('Please fill the form correctly...');
    }
  }

  /**
   * @name getPatchValue
   * @description This method patch the employee value on bases of id.
   */
  public getPatchValue() {
    this.isAdd = !this.id;
    if (!this.isAdd) {
      this.service
        .getById(this.id)
        .subscribe((data) => this.registrationForm.patchValue(data));
    }
  }

  /**
   * @name updateEmployee
   * @description This method updates the employee value.
   */
  public upadteEmployee() {
    this.service
      .updateEmployeeData(this.id, this.registrationForm.value)
      .subscribe(() => {
        alert('Data updated successfully...');
        // this.router.navigate(['/crud-task/list-view/']);
        this.onSubmitData.emit(this.registrationForm.value);
        this.onclose();
      });
  }

  /**
   * @name getValues
   * @description This getter method get the form controls.
   */
  public get getValues() {
    return this.registrationForm['controls'];
  }

  /**
   * @name resetForm
   * @description This method reset the form.
   */
  public resetForm() {
    this.registrationForm.reset();
  }

  /**
   * @name onclose
   * @description This method emits the close event.
   */
  public onclose() {
    this.close.emit();
  }
}
