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

  public viewFile(content: string, type: string) {
    let b64 = content.split(',')[1];
    const byteCharacters = atob(b64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: type });
    const url = URL.createObjectURL(blob);
    window.open(url);
  }
}
