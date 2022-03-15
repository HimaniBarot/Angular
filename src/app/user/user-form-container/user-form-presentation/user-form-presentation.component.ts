import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/modules/crud-task/models/department.model';
import { UserListPresenterService } from '../../user-list-container/presenter/user-list-presenter.service';
import { UserFormPresenterService } from '../presenter/user-form-presenter.service';

@Component({
  viewProviders: [UserFormPresenterService],
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss']
})
export class UserFormPresentationComponent implements OnInit {

  // @Input() public set departmentList(value:Department[]){

  // }

  constructor(private userListPresenterService: UserListPresenterService) { }

  ngOnInit(): void {
  }

}
