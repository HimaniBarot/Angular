import { Component, OnInit } from '@angular/core';
import { DemoFormPresenterService } from '../presenter/demo-form-presenter.service';

@Component({
  selector: 'app-demo-form-presentation',
  templateUrl: './demo-form-presentation.component.html',
  styleUrls: ['./demo-form-presentation.component.scss'],
  viewProviders: [DemoFormPresenterService]
})
export class DemoFormPresentationComponent implements OnInit {

  constructor(private demoFormPresenter: DemoFormPresenterService) { }

  ngOnInit(): void {
  }

}
