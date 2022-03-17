import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class MentorListPresenterService {

  private delete: Subject<number>;
  public delete$: Observable<number>;

  constructor() {
    this.delete = new Subject();
    this.delete$ = new Observable();

    this.delete$ = this.delete.asObservable();
  }

  /** Delete Mentor service call from mentorservice */
  public deleteMentor(id: number) {
    this.delete.next(id);
  }
  
}