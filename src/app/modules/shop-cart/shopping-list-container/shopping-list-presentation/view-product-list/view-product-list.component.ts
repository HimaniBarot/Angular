import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../model/shopCart.model';

@Component({
  selector: 'app-view-product-list',
  templateUrl: './view-product-list.component.html',
  styleUrls: ['./view-product-list.component.scss']
})
export class ViewProductListComponent implements OnInit {

  public shoppingList: ShoppingCart[];

  constructor() { }

  ngOnInit(): void {
  }

}
