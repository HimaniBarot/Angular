import { Component, OnInit } from '@angular/core';
import { ShoppingFormService } from '../presenter/shopping-form.service';

@Component({
  selector: 'app-shopping-form-presentation',
  templateUrl: './shopping-form-presentation.component.html',
  styleUrls: ['./shopping-form-presentation.component.scss'],
  viewProviders: [ShoppingFormService]
})
export class ShoppingFormPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
