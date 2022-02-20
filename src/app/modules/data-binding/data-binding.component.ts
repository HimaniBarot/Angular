import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  inputMsg: string = 'Two Way binding';
  public childData: string = '';

  constructor() {}

  ngOnInit(): void {}

  // interpolation
  interpolation: string = 'Data Binding..';
  method: string = 'interpolation';
  customMethod() {
    return 'This is custom ' + this.method;
  }

  // property binding
  placeholder: string = 'Type here..';

  // class & style binding
  classBind: boolean = true;
  padding: string = '10px';

  myStyle = {
    color: 'green',
    'font-size': '1rem',
  };

  // EVENT BINDING
  message: string = '';
  showMsg(event: Event) {
    this.message = 'Data added..';
  }

  // TWO WAY BINDING
  twoWayMsg: string = '';
}
