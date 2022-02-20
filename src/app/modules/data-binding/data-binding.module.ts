import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { DataBindingComponent } from './data-binding.component';
import { FormsModule } from '@angular/forms';
import { InputOutputComponent } from './input-output/input-output.component';

@NgModule({
  declarations: [DataBindingComponent, InputOutputComponent],
  imports: [CommonModule, DataBindingRoutingModule, FormsModule],
})
export class DataBindingModule {}
