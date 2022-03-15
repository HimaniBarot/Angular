import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from 'src/app/modules/crud-task/models/employee.model';
import { MvpUserService } from '../service/mvp-user.service';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss']
})
export class UserListContainerComponent implements OnInit {
  
  /** user list data */
  public employeeList$: Observable<Employee[]>;

  constructor(private mvpUserService: MvpUserService) { 
    this.employeeList$ = new Observable<Employee[]>();
  }

  ngOnInit(): void {
    this.employeeList$ = this.mvpUserService.getEmployeeData();
  }

}
