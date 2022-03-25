import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/models/department.model';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent implements OnInit {

  userData: User[];
  departmentData: Department[];
  filterString: string='';
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserList();
    this.getDepartmentOption();
  }

  getUserList() {
    this.userService.getUserDeatils().subscribe((userData)=>{
      this.userData = userData;
    },
    ()=>{
      alert('Something went wrong');
    })
  }

  // delete user
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((data) => {
      this.userData.splice(id - 1, 1);
      console.log('data deleted', data);
      this.getUserList();
    });
  }

  // department options
  getDepartmentOption() {
    this.userService.getDepartment().subscribe(
      (departmentOption) => {
        this.departmentData = departmentOption;
      },
      () => {
        alert('Something went wrong');
      }
    );
  }

  // // pagination
  // activePage = 0;

  // displayActivePage(activePageNumber: number): void {
  //   this.activePage = activePageNumber;
  // }

}
