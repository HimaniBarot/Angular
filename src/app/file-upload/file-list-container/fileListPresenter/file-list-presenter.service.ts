import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class FileListPresenterService {

  private delete: Subject<number>;
  public delete$: Observable<number>;

  constructor(private fb: FormBuilder) { 
    this.delete = new Subject();
    this.delete$ = this.delete.asObservable();
  }

  public buildDateForm() {
    return this.fb.group({
      fromDate: [null],
      toDate: [null],
    });
  }

  public deleteFile(id: number) {
    this.delete.next(id);
  }
}
