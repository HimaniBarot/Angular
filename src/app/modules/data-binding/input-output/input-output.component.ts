import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent implements OnInit {
  @Input() childMsg: string = '';
  @Output() childEvent = new EventEmitter<string>();

  onChange(childData: string) {
    this.childEvent.emit(childData);
  }

  constructor() {}

  ngOnInit(): void {}
}
