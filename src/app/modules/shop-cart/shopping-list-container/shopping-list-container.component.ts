import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../model/shopCart.model';
import { ShopCartService } from '../service/shop-cart.service';

@Component({
  selector: 'app-shopping-list-container',
  templateUrl: './shopping-list-container.component.html',
  styleUrls: ['./shopping-list-container.component.scss']
})
export class ShoppingListContainerComponent implements OnInit {

  public shoppingList$: Observable<ShoppingCart[]>;

  constructor(private _shopCartService: ShopCartService) { 
    this.shoppingList$ = new Observable();
  }

  ngOnInit(): void {
    this.props();
  }

  public props(){
    this.shoppingList$ = this._shopCartService.getShoppingList();
  }

  public onSave(data: ShoppingCart){
    this._shopCartService.addProductDetails(data).subscribe((res) => {
      console.log(res);
    })
  }
}
