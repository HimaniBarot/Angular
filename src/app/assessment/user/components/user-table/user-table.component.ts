import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/shared/models/department.model';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @Input() userList: User[];
  @Input() department: Department[];

  @Output() userToDelete: EventEmitter<number> = new EventEmitter<number>();

  // public popup = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  deleteUser(id: number) {
    this.userToDelete.emit(id);
  }

  editUser(id: number) {
    console.log(id);
    this.router.navigateByUrl(`/user/userForm/${id}`);
  }

  // viewUserDetails(id: number) {
  //   if(id){
  //     this.userId = id;
  //     this.popup = true;
  //   }else{
  //     this.popup = false;
  //   }
  // }

  // private isAscendingSort: boolean = false;

  // sortUser() {
  //   console.log('sorting!'); // just to check if sorting is being called
  //   this.isAscendingSort = !this.isAscendingSort; // you missed this

  //   this.userList.sort();
  // }

  // let isAscendingSort: Boolean = true;
  // sortUser() {
  //   console.log('sorting!'); //just to check if sorting is being called
  //   this.userList.sort((item1: any, item2: any) => this.compare(item1, item2));
  // }
  // // Sort
  // compare(item1: any, item2: any): number {
  //   let compValue = 0;
  //   compValue = item1.email.localeCompare(item2.email, 'en', {
  //     sensitivity: 'base'
  //   });
  //   // console.log(compValue);
  //   if (!this.isAscendingSort) {
  //     compValue = compValue * -1;
  //   }
  //   return compValue;
  // }
}
