import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../models/department.model';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  deparmentList: Department[];
  employeeList: Employee[];
  filterData: string = '';

  constructor(private service: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.getEmployeeDataList();
    this.getDepartmentData();
  }

  // GET DEPARTMENT DATA
  getDepartmentData() {
    this.service
      .getDepartment()
      .subscribe((data) => (this.deparmentList = data));
  }

  // GET EMPLOYEE DATA
  getEmployeeDataList() {
    this.service.getEmployeeData().subscribe(
      (employeeData) => {
        // debugger
        this.employeeList = employeeData;
      },
      () => {
        alert('Something went wrong');
      }
    );
  }

  //  DELETE EMPLOYEE DATA
  deleteEmployee(id: number) {
    this.service.deleteEmployeeData(id).subscribe((data) => {
      this.employeeList.splice(id - 1, 1);
      console.log('data deleted', data);
      this.getEmployeeDataList();
    });
  }

  // EDIT CLICK EVENT
  editEmployee(id: number) {
    // debugger
    this.router.navigateByUrl(`/crud-task/employee-form/${id}`);
  }
}
