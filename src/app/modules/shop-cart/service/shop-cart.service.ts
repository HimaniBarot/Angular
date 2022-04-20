import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShoppingCart } from '../model/shopCart.model';

@Injectable()
export class ShopCartService {

  private _api: string;

  constructor(private _http: HttpClient) { 
    this._api = environment.baseURL;
  }

  public getShoppingList(): Observable<ShoppingCart[]>{
    return this._http.get<ShoppingCart[]>(`${this._api}/shoppingList`);
  }
}
