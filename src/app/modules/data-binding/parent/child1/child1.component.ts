import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  @Input() public today: number;

  constructor() { }

  ngOnInit(): void {
    this.setHostClassByInterval();
  }

  @HostBinding('class.isActive') isActive = true;
  count = 0;

  setHostClassByInterval() {
    setInterval(() => {
      this.isActive = !this.isActive;
    }, 1000);
  }

}
