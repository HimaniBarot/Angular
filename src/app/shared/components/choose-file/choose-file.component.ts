import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-file',
  templateUrl: './choose-file.component.html',
})
export class ChooseFileComponent implements OnInit {

  files: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  chooseFile(pFileList: any){
    this.files = Object.keys(pFileList).map(key => pFileList[key]);
    console.log(this.files);
  }

}
