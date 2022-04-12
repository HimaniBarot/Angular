import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  constructor(private _fileListPresenterService: FileListPresenterService) {
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.dateForm = this._fileListPresenterService.buildDateForm();
    this._fileListPresenterService.delete$.subscribe((id: number) => {
      this.delete.emit(id);
    });
  }

  public deleteFile(id: number) {
    this._fileListPresenterService.deleteFile(id);
  }

  showFile(content: string, type: string){
    this._fileListPresenterService.viewFile(content, type);
  }

  public readStartDate(input: any) {
    this.startDate = input.target.value;
  }

  public readendDate(input: any) {
    this.endDate = input.target.value;
  }

}
