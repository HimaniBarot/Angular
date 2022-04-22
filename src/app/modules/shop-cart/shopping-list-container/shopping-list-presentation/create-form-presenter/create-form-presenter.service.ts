import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShoppingCart } from '../../../model/shopCart.model';
import { CreateFormPresentationComponent } from '../create-form-presentation/create-form-presentation.component';
import { ViewProductListComponent } from '../view-product-list/view-product-list.component';

@Injectable({
  providedIn: 'root'
})
export class CreateFormPresenterService {

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
  createFormComponentRef: ComponentRef<CreateFormPresentationComponent>;
  overlayRef: OverlayRef;
  
  public createOverlay() {
    this.overlayRef = this._overlay.create({
      hasBackdrop: true,
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
    });


    const component = new ComponentPortal(ViewProductListComponent);
    this.componentRef = this.overlayRef.attach(component);

    /** Close overlay on button click */
    // this.componentRef.instance.closeForm.subscribe(() => {
    //   this.overlayRef.detach();
    // });

    /** Close overlay on backdrop */
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
    });
  }
}
