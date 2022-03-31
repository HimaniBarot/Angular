import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileDragDropRoutingModule } from './file-drag-drop-routing.module';
import { FileDragDropComponent } from './file-drag-drop.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListPresentationComponent } from './list-container/list-presentation/list-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FileDragDropComponent,
    ListContainerComponent,
    ListPresentationComponent,
  ],
  imports: [
    CommonModule,
    FileDragDropRoutingModule,
    SharedModule
  ]
})
export class FileDragDropModule { }
