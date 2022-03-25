import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './components/delete/delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DepartmentListPipe } from './pipes/department-list.pipe';



@NgModule({
  declarations: [
    DeleteComponent,
    DepartmentListPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    DepartmentListPipe
  ]
})
export class SharedModule { }
