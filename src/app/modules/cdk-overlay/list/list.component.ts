import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {
  // username: string = 'Himani';
  // @ViewChild('hello') hello: ElementRef;
  @ViewChild('displayForm') displayForm: ElementRef<any>;
  @ViewChild(FormComponent) form: FormComponent;

  constructor() {}

  ngOnInit() {
    // this.displayForm.nativeElement.style.display = 'none';
  }

  ngAfterViewInit(): void {
    // console.log(this.hello);
    // this.hello.nativeElement.style.color = 'Green';
    console.log(this.form);
  }

  showForm() {
    this.form.username = 'Angular';
    // this.displayForm.nativeElement.style.display = 'block';
    this.displayForm.nativeElement.style.display = 'block';
  }

  // clickMe() {
  //   alert(this.username);
  // }
}
