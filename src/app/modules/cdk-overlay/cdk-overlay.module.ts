import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkOverlayRoutingModule } from './cdk-overlay-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ListComponent, FormComponent, DragAndDropComponent],
  imports: [CommonModule, CdkOverlayRoutingModule, FormsModule, DragDropModule],
  exports: [ListComponent, FormComponent],
})
export class CdkOverlayModule {}
