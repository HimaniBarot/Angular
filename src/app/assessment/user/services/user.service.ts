import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department, User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiLink: string;
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  // GET DEPARTMENT LIST
  getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/departments`);
  }

  // ADD EMPLOYEE
  addUserDetail(userData: User): Observable<User> {
    return this.http.post<User>(`${this.apiLink}/userDetails`, userData);
  }

  // GET EMPLOYEE DATA AFTER ADDING INTO THE LIST-TABLE
  getUserDeatils(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiLink}/userDetails`);
  }

  // get id for update the userdetails
  getById(id: number) {
    return this.http.get<User>(`${this.apiLink}/userDetails/${id}`);
  }
  
  // Update data
  updateUser(id: number, userData: User) {
    return this.http.put(`${this.apiLink}/userDetails/${id}`, userData);
  }

  // DELETE DATA FROM THE TABLE AWA SERVER-db.json
  deleteUser(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/userDetails/${id}`);
  }
}
