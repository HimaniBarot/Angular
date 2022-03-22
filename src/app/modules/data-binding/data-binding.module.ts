import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { DataBindingComponent } from './data-binding.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DataBindingComponent, InputOutputComponent],
  imports: [CommonModule, DataBindingRoutingModule, SharedModule],
})
export class DataBindingModule {}
