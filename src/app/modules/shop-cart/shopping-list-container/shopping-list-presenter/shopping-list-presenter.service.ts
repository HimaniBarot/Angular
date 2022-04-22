import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { CreateFormPresentationComponent } from '../shopping-list-presentation/create-form-presentation/create-form-presentation.component';

@Injectable()
export class ShoppingListPresenterService {

  constructor(private _overlay: Overlay) { }

  componentRef: ComponentRef<CreateFormPresentationComponent>;
  overlayRef: OverlayRef;
  
  public createOverlay() {
    this.overlayRef = this._overlay.create({
      hasBackdrop: true,
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
    });


    const component = new ComponentPortal(CreateFormPresentationComponent);
    this.componentRef = this.overlayRef.attach(component);

    /** Close overlay on button click */
    this.componentRef.instance.closeForm.subscribe(() => {
      this.overlayRef.detach();
    });

    /** Close overlay on backdrop */
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
    });
  }
}
