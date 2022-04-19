import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopCartComponent } from './shop-cart.component';
import { ShoppingFormPresentationComponent } from './shopping-list-container/shopping-form-presentation/shopping-form-presentation.component';
import { ShoppingListContainerComponent } from './shopping-list-container/shopping-list-container.component';

const routes: Routes = [
  {
    path: '', component: ShopCartComponent,
    children: [
      {
        path: '', component: ShoppingListContainerComponent
      },
      {
        path: 'add', component: ShoppingFormPresentationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopCartRoutingModule { }
