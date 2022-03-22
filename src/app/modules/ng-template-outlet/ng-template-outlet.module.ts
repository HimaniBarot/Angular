import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTemplateOutletRoutingModule } from './ng-template-outlet-routing.module';
import { NgTemplateOutletComponent } from './ng-template-outlet.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NgTemplateOutletComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgTemplateOutletRoutingModule
  ]
})
export class NgTemplateOutletModule { }
