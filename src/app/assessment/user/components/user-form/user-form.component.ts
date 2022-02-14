import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department, User } from '../../model/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.buildUserForm();
    this.getDepartmentOption();
    this.getPatchValue();
  }

  userForm: FormGroup;
  departments: Department[];
  userList: User[];
  id: number;
  isAdd: boolean;

  buildUserForm() {
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      mobile: [, Validators.required],
      city: [''],
      gender: [''],
      deparmentList: ['', Validators.required],
      dateOfHire: [''],
      checkbox:[]
    });
  }

  // condition to check add/edit mode
  onSubmit() {
    if (this.isAdd) {
      this.saveData();
    } else {
      this.upadteUserDetails();
    }
  }

  // ADD USER DATA
  saveData() {
    const saveUser = this.userForm.value;

    if (this.userForm.status == 'VALID') {
      this.userService.addUserDetail(saveUser).subscribe(() => {
        alert('User Created successfully...');
        this.router.navigate(['/user/userList']);
      });
    } else {
      alert('Please fill the form correctly...');
    }

  }

  // department options
  getDepartmentOption() {
    this.userService.getDepartment().subscribe(
      (departmentOption) => {
        this.departments = departmentOption;
      },
      () => {
        alert('Something went wrong');
      }
    );
  }

  // get patchvalue to update the userdetails
  getPatchValue() {
    this.isAdd = !this.id;
    if (!this.isAdd) {
      this.userService.getById(this.id).subscribe((data) => this.userForm.patchValue(data));
    }
  }

  // update the userdetails
  upadteUserDetails() {
    this.userService.updateUser(this.id, this.userForm.value).subscribe(() => {
      alert('user details updated...');
      this.router.navigate(['/user/userList/']);
    });
  }

  // function to get formcontrols
  get getFormControls() {
    return this.userForm['controls'];
  }

  // reset form
  resetForm() {
    this.userForm.reset();
  }
}
