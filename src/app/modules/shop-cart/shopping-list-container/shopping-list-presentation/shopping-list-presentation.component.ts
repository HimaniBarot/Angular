import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../presenter/shopping-list.service';

@Component({
  selector: 'app-shopping-list-presentation',
  templateUrl: './shopping-list-presentation.component.html',
  styleUrls: ['./shopping-list-presentation.component.scss'],
  viewProviders: [ShoppingListService]
})
export class ShoppingListPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
