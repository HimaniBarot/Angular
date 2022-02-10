import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResumeDetails } from '../models/resume-details.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeDetailsService {

  apiLink : string;
  constructor(private http:HttpClient) { 
    this.apiLink = environment.baseURL;
  }

  addResumeDetails(userData: ResumeDetails) : Observable<ResumeDetails>{
    return this.http.post<ResumeDetails>(`${this.apiLink}/user`, userData);
  }

  getUserData() : Observable<ResumeDetails[]>{
    return this.http.get<ResumeDetails[]>(`${this.apiLink}/user`);
  }

  deleteUser(id:number):Observable<ResumeDetails>{
    return this.http.delete<ResumeDetails>(`${this.apiLink}/user/${id}`);
  }

  getById(id : number):Observable<ResumeDetails>{
    return this.http.get<ResumeDetails>(`${this.apiLink}/user/${id}`);
  }

}
