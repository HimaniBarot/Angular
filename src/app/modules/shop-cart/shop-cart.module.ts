import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopCartRoutingModule } from './shop-cart-routing.module';
import { ShoppingListContainerComponent } from './shopping-list-container/shopping-list-container.component';
import { ShoppingListPresentationComponent } from './shopping-list-container/shopping-list-presentation/shopping-list-presentation.component';
import { ShopCartService } from './service/shop-cart.service';
import { CreateFormPresentationComponent } from './shopping-list-container/shopping-list-presentation/create-form-presentation/create-form-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewProductListComponent } from './shopping-list-container/shopping-list-presentation/view-product-list/view-product-list.component';

@NgModule({
  declarations: [
    ShoppingListContainerComponent,
    ShoppingListPresentationComponent,
    CreateFormPresentationComponent,
    ViewProductListComponent,
  ],
  imports: [
    CommonModule,
    ShopCartRoutingModule,
    SharedModule
  ],
  providers: [ShopCartService]
})
export class ShopCartModule { }
