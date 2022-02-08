import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { DataBindingComponent } from './data-binding.component';


@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    DataBindingRoutingModule
  ],
  exports: [
    DataBindingComponent
  ]
})
export class DataBindingModule { }
