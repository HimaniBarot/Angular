import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class FileListPresenterService {

  private delete: Subject<number>;
  public delete$: Observable<number>;
  
  private _viewFile: Subject<string>;
  public viewFile$: Observable<string>;

  constructor(private fb: FormBuilder) {
    this.delete = new Subject();
    this._viewFile = new Subject();
    this.delete$ = this.delete.asObservable();
    this.viewFile$ = this._viewFile.asObservable();
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
    // const url: string = this._sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
    this._viewFile.next(url);
    // window.open(url);
  }
}
