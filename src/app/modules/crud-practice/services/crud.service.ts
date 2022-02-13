import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/crud.model';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  apiLink: string;
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  addUserDetails(userData: User): Observable<User> {
    return this.http.post<User>(`${this.apiLink}/crud`, userData);
  }
}
