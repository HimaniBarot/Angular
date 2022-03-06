import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ----------------------------------------------------------------------------//
import { CdkOverlayRoutingModule } from './cdk-overlay-routing.module';
// ----------------------------------------------------------------------------//
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
// ----------------------------------------------------------------------------//
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule, CdkOverlayRoutingModule, MatButtonModule],
  exports: [ListComponent, FormComponent],
})
export class CdkOverlayModule {}
