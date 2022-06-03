import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvpRoutingModule } from './mvp-routing.module';
import { MultiStepContainerComponent } from './multi-step-container/multi-step-container.component';
import { MultiStepPresentationComponent } from './multi-step-container/multi-step-presentation/multi-step-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MultiStepContainerComponent,
    MultiStepPresentationComponent
  ],
  imports: [
    CommonModule,
    MvpRoutingModule,
    SharedModule
  ]
})
export class MvpModule { }
