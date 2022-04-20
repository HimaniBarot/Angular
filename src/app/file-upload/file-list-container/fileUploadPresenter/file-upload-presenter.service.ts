import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MyFile } from '../../file.model';

@Injectable()
export class FileUploadPresenterService {

  private file: MyFile;
  private _fileToUpload: Subject<MyFile>;
  public fileToUpload$: Observable<MyFile>;

  constructor() {
    this.file = {} as MyFile;
    this._fileToUpload = new Subject<MyFile>();
    this.fileToUpload$ = new Observable<MyFile>();
    this.fileToUpload$ = this._fileToUpload.asObservable();
  }

  //check file validation and store the type data in File object ans emit File
  public uploadFile(file: File) {
    //size in mb
    let size = Math.round(file.size / 1024 / 1024);
    if (size <= 2) {
      this.file.name = file.name;
      this.file.size = size;
      // this.file.size = Math.round(file.size / 1024)
      this.file.type = file.type;
      // file reader to read file content
      const reader = new FileReader();
      //read as url to get base64 type data
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.file.content = event.target?.result as string;
        //emit file
        this._fileToUpload.next(this.file);
      };
    }
    else {
      alert("File Size is above 2mb")
    }
  }
}