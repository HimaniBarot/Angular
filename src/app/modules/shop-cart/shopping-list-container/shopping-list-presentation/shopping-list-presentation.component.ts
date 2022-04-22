import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from '../../model/shopCart.model';
import { ShoppingListPresenterService } from '../shopping-list-presenter/shopping-list-presenter.service';

@Component({
  selector: 'app-shopping-list-presentation',
  templateUrl: './shopping-list-presentation.component.html',
  styleUrls: ['./shopping-list-presentation.component.scss'],
  viewProviders: [ShoppingListPresenterService]
})
export class ShoppingListPresentationComponent implements OnInit {

  private _shoppingList: ShoppingCart[] | null;

  @Input() public set shoppingList(value: ShoppingCart[] | null){
    if(value){
      this._shoppingList = value;
    }
  }

  public get shoppingList(): ShoppingCart[] | null{
    return this._shoppingList;
  }

  constructor(private _shoppingListPresenter: ShoppingListPresenterService) { }

  ngOnInit(): void {
    // this.displayOverlay();
  }

  public displayOverlay() {
    this._shoppingListPresenter.createOverlay();
  }

}
