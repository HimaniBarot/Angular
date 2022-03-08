import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.scss']
})
export class NgTemplateOutletComponent implements OnInit {

  @ViewChild('cardTemplate', { static: true }) cardTemplate: TemplateRef<HTMLElement>;
  @ViewChild('listTemplate', { static: true }) listTemplate: TemplateRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

  mode = "card"

  public items = [
    {
      header: 'JavaScript',
      content: 'This is Javascriprt content desc'
    },
    {
      header: 'TypeScript',
      content: 'This is TypeScript content desc'
    },
    {
      header: 'Angular',
      content: 'This is Angular content desc'
    },
  ];

  modeOptions = [
    { mode: "card" },
    { mode: "list" },
  ];

  // Get template
  get template() {
    if (this.mode == "list") {
      return this.listTemplate
    } else {
      return this.cardTemplate
    }
  }

}
