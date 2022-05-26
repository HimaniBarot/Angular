import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShoppingCart } from '../../model/shopCart.model';
import { ViewProductListComponent } from '../shopping-list-presentation/view-product-list/view-product-list.component';

@Injectable()
export class ShoppingListPresenterService {

  public createForm: FormGroup;
  public shoppingList: ShoppingCart[];

  constructor(private _fb: FormBuilder, private _overlay: Overlay) { }
  
  public buildForm(){
    return this._fb.group({
      name: [""],
      email: [""]
    })
  }

  public onSubmit(){
    // this.shoppingList.push(this.shoppingList);
    // console.log(this.shoppingList);
    console.log(this.createForm);
    console.log(this.createForm.value);
    this.shoppingList.push(this.createForm.value);
  }

  componentRef: ComponentRef<ViewProductListComponent>;
  overlayRef: OverlayRef;
  
  public createOverlay(res: any) {
    this.overlayRef = this._overlay.create({
      hasBackdrop: true,
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
    });

    const component = new ComponentPortal(ViewProductListComponent);
    this.componentRef = this.overlayRef.attach(component);
    
    this.componentRef.instance.shoppingList = res;

    /** Close overlay on button click */
    // this.componentRef.instance.closeForm.subscribe(() => {
    //   this.overlayRef.detach();
    // });

    // Close overlay on backdrop
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
    });
  }
}
