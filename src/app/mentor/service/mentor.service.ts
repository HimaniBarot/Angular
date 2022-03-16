import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Department } from 'src/app/modules/crud-task/models/department.model';
import { environment } from 'src/environments/environment';
import { Mentor, MentorForm } from '../model/mentor.model';

@Injectable()
export class MentorService {

  private apiLink: string;
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  /** get departmrnt list */
  getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/departments`);
  }

  /** Add Mentor */ 
  addMentor(mentorForm: MentorForm): Observable<MentorForm> {
    return this.http.post<MentorForm>(`${this.apiLink}/mentors`, mentorForm);
  }

  /** get mentor list */
  getMentors(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>(`${this.apiLink}/mentors`);
  }

  /** get id to edit */
  getMentorById(id: number): Observable<Mentor> {
    return this.http.get<Mentor>(`${this.apiLink}/mentors/${id}`);
  }

  editMentorData(editMentorData: MentorForm, id: number) {
    return this.http.put(`${this.apiLink}/mentors/${id}`, editMentorData);
  }

  /** Delete Mentor */
  deleteMentorData(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/mentors/${id}`);
  }
}
