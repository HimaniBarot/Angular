import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoService } from './demo.service';
import { DemoListContainerComponent } from './demo-list-container/demo-list-container.component';
import { DemoListPresentationComponent } from './demo-list-container/demo-list-presentation/demo-list-presentation.component';
import { DemoFormPresentationComponent } from './demo-list-container/demo-form-presentation/demo-form-presentation.component';


@NgModule({
  declarations: [
    DemoListContainerComponent,
    DemoListPresentationComponent,
    DemoFormPresentationComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ],
  providers: [
    DemoService
  ]
})
export class DemoModule { }
