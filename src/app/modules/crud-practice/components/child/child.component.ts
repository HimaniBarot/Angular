import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() placeholderText: string = '';

  @Output() showMessage = new EventEmitter<string>();
  messageToChild: string = 'Hello from parent';

  constructor() {}

  ngOnInit(): void {}

  sendData() {
    this.showMessage.emit(this.messageToChild);
  }
}
