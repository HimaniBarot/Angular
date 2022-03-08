import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() id: number;
  @Output() delete : EventEmitter<string>;

  constructor() { 
    this.delete = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  onClose(name: string){
    this.delete.emit(name);
  }

}
