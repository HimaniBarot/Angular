import { Component, OnInit } from '@angular/core';
import { Demo } from '../demo.model';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-demo-list-container',
  templateUrl: './demo-list-container.component.html',
  styleUrls: ['./demo-list-container.component.scss']
})
export class DemoListContainerComponent implements OnInit {

  public data: Demo[];
  // public details$: Observable<Demo[]>;

  constructor(private _demoService: DemoService) { 
    // this.details$ = new Observable<Demo[]>();
  }

  ngOnInit(): void {
    this._demoService.getDetails().subscribe(res=>{ this.data = res})
    // this.details$ = this._demoService.getDetails();
  }

}
