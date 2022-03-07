import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() items: any[] = [];
  @Input() itemTemplate: TemplateRef<HTMLElement>;

}
