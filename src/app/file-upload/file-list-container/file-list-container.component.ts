import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from '../file-upload.service';
import { MyFile } from '../file.model';

@Component({
  selector: 'app-file-list-container',
  templateUrl: './file-list-container.component.html',
  styleUrls: ['./file-list-container.component.scss'],
  viewProviders: [FileUploadService],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileListContainerComponent implements OnInit {

  /** user list data */
  public filesList$: Observable<MyFile[]>

  constructor(private fileService: FileUploadService) {
    this.filesList$ = new Observable<MyFile[]>();
  }

  ngOnInit(): void {
    this.getAllFiles();
  }

  getAllFiles() {
    this.filesList$ = this.fileService.getAllFiles();
  }

  public addFile(file: MyFile) {
    this.fileService.addFile(file).subscribe({
      next: () => {
        alert("File Added");
        this.filesList$ = this.fileService.getAllFiles();
      },
      error: (e) => { console.log(e) }
    })
  }

  public uploadFile(file: MyFile) {
    this.filesList$.subscribe((list) => {
      let isFile = list.find((res) => {
        return res.name === file.name
      })
      if (isFile) {
        alert("File with same name already exist.");
      }
      else {
        this.addFile(file);
      }
    })
  }

  public deleteFile(id: number) {
    this.fileService.deleteFile(id).subscribe(
      () => {
        this.filesList$ = this.fileService.getAllFiles();
      }
    )
  }

}
