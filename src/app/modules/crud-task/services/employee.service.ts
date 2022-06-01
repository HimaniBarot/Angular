import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/shared/models/department.model';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  
  public apiLink: string;
  constructor(private _http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  // GET DEPARTMENT LIST
  public getDepartment(): Observable<Department[]> {
    return this._http.get<Department[]>(`${this.apiLink}/departments`);
  }

  // ADD EMPLOYEE
  public addEmployeeData(employeeData: Employee): Observable<Employee> {
    return this._http.post<Employee>(`${this.apiLink}/employees`, employeeData);
  }

  // GET EMPLOYEE DATA AFTER ADDING INTO THE LIST-TABLE
  public getEmployeeData(): Observable<Employee[]> {
    return this._http.get<Employee[]>(`${this.apiLink}/employees`);
  }

  // Update data
  public getById(id: number) {
    return this._http.get<Employee[]>(`${this.apiLink}/employees/${id}`);
  }

  public updateEmployeeData(id: number, employeeData: Employee) {
    return this._http.put(`${this.apiLink}/employees/${id}`, employeeData);
  }

  // DELETE DATA FROM THE TABLE AWA SERVER-db.json
  public deleteEmployeeData(id: number): Observable<number> {
    return this._http.delete<number>(`${this.apiLink}/employees/${id}`);
  }
}
