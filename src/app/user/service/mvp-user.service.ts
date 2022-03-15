import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Department } from 'src/app/modules/crud-task/models/department.model';
import { Employee } from 'src/app/modules/crud-task/models/employee.model';
import { environment } from 'src/environments/environment';
import { UserModule } from '../user.module';

@Injectable()
export class MvpUserService {

  apiLink: string;
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  // GET DEPARTMENT LIST
  getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/departments`);
  }

  // ADD EMPLOYEE
  addEmployeeData(employeeData: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiLink}/employees`, employeeData);
  }

  // GET EMPLOYEE DATA AFTER ADDING INTO THE LIST-TABLE
  getEmployeeData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiLink}/employees`);
  }

  // Update data
  getById(id: number) {
    return this.http.get<Employee[]>(`${this.apiLink}/employees/${id}`);
  }

  updateEmployeeData(id: number, employeeData: Employee) {
    return this.http.put(`${this.apiLink}/employees/${id}`, employeeData);
  }

  // DELETE DATA FROM THE TABLE AWA SERVER-db.json
  deleteEmployeeData(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/employees/${id}`);
  }
}
