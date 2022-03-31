import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-file',
  templateUrl: './choose-file.component.html',
  styleUrls: ['./choose-file.component.scss']
})
export class ChooseFileComponent implements OnInit {

  files: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  // chooseFile(event: any){
  //   // debugger
  //   // console.log(event);
    
  //   this.files = event.target.files[0];
  //   console.log(this.files);
    
  // }

  chooseFile(pFileList: any){
    // if (this.files.type == 'image/jpeg' || this.files.type == 'application/pdf') {

    // } else {
    //   alert("file type should be image of pdf")
    //   return;
    // }
    this.files = Object.keys(pFileList).map(key => pFileList[key]);
    console.log(this.files);
  }

}
