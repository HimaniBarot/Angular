import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  text: string = 'testing @Input..';
  constructor() {}
  showMessage: string;

  ngOnInit(): void {}
  onClickShowMsg(event: any) {
    this.showMessage = event;
  }
}
