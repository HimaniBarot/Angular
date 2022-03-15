import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/modules/crud-task/models/employee.model';
import { UserListPresenterService } from '../presenter/user-list-presenter.service';

@Component({
  viewProviders: [UserListPresenterService],
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss']
})
export class UserListPresentationComponent implements OnInit {

  private _employeeList : Employee[];

  @Input() public set employeeList(value: Employee[] | null){
    if (value) {
      this._employeeList = value;
      // this.tempUserList = value;
    }
  }
  public get employeeList(): Employee[] | null {
    return this._employeeList;
  }

  constructor(private userListPresenterService: UserListPresenterService) {
    this._employeeList = [];
   }

  ngOnInit(): void {
  }

}
