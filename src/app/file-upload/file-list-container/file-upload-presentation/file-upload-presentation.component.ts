import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyFile } from '../../file.model';
import { FileUploadPresenterService } from '../fileUploadPresenter/file-upload-presenter.service';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss'],
  viewProviders: [FileUploadPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadPresentationComponent implements OnInit {

  public file: File;
  myFiles: string[] = [];

  @Output() fileToUpload: EventEmitter<MyFile>;

  constructor(private _fileUploadPrensenter: FileUploadPresenterService) {
    this.fileToUpload = new EventEmitter<MyFile>();
  }

  ngOnInit(): void {
    this._fileUploadPrensenter.fileToUpload$.subscribe((res) => {
      this.fileToUpload.emit(res);
    })
  }

  readFile(files: any) {
    this.file = files.files[0];
  }

  uploadFile() {
    if (this.file) {
      this._fileUploadPrensenter.uploadFile(this.file);
    }
    else {
      alert("No File is Selected")
    }
  }

}
