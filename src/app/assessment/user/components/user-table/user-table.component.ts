import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Department, User } from '../../model/user.model';

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

}
