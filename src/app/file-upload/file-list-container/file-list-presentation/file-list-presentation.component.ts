import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MyFile } from '../../file.model';
import { FileListPresenterService } from '../fileListPresenter/file-list-presenter.service';

@Component({
  selector: 'app-file-list-presentation',
  templateUrl: './file-list-presentation.component.html',
  viewProviders: [FileListPresenterService]
})
export class FileListPresentationComponent implements OnInit {

  /** setter for user list */
  @Input() public set fileList(value: MyFile[] | null) {
    if (value) {
      this._fileList = value;
    }
  }
  public get fileList(): MyFile[] {
    return this._fileList;
  }

  @Output() public delete: EventEmitter<number>;

  private _fileList: MyFile[];
  public dateForm: FormGroup;
  public startDate: string;
  public endDate: string;

  public safeUrl: SafeResourceUrl;
  public isPDF: boolean;

  constructor(private _fileListPresenterService: FileListPresenterService, private _sanitizer: DomSanitizer) {
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.dateForm = this._fileListPresenterService.buildDateForm();
    this._fileListPresenterService.delete$.subscribe((id: number) => {
      this.delete.emit(id);
    });
    this.isPDF = false;
  }

  public deleteFile(id: number) {
    this._fileListPresenterService.deleteFile(id);
  }

  public showFile(content: string, type: string){
    if(type == "application/pdf"){
      this.isPDF = true;
    }
    this._fileListPresenterService.viewFile$.subscribe((res: any) => {
      this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(res);
    })
    this._fileListPresenterService.viewFile(content, type);
  }

  public readStartDate(input: any) {
    this.startDate = input.target.value;
  }

  public readendDate(input: any) {
    this.endDate = input.target.value;
  }

}
