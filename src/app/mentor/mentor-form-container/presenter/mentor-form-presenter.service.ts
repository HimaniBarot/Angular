import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Mentor } from '../../model/mentor.model';

@Injectable()
export class MentorFormPresenterService {

  public mentorFormData: Subject<Mentor>;
  public mentorFormData$: Observable<Mentor>;

  constructor(private fb: FormBuilder) {
    this.mentorFormData = new Subject();

    this.mentorFormData$ = this.mentorFormData.asObservable();
  }

  /** Create mentor form */
  public createMentorForm() {
    return this.fb.group({
      name: ['', Validators.required],
      department: [, Validators.required]
    })
  }

  /** Send mentor to add */
  addMentor(mentorForm: FormGroup) {
    if(!mentorForm.valid) {
      return;
    } else {
      this.mentorFormData.next(mentorForm.value)
    }
  }
}
