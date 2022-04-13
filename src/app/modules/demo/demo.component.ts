import { Component, OnInit } from '@angular/core';
import { Demo } from './demo.model';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit {

  data: Demo[];

  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._demoService.getDetails().subscribe((data) => {
      this.data = data;
    })
  }

}
