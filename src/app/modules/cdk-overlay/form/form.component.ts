import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  username: string = 'Himani';
  // form: ElementRef;
  // @ViewChild('formD') formD: ElementRef;

  constructor() {}

  ngOnInit(): void {
    // this.formD.nativeElement.style.display = 'none';
  }

  ngAfterViewInit(): void {
    // console.log(this.hello);
    // this.hello.nativeElement.style.color = 'Green';
    // this.hello.nativeElement.style.display = 'none';
    // console.log(this.form);
  }

  clickMe() {
    alert(this.username);
  }
}
