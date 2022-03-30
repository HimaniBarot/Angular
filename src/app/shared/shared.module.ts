import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './components/delete/delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DepartmentListPipe } from './pipes/department-list.pipe';
import { ChooseFileComponent } from './components/choose-file/choose-file.component';
@NgModule({
  declarations: [
    DeleteComponent,
    DepartmentListPipe,
    ChooseFileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    DepartmentListPipe,
    ChooseFileComponent
  ]
})
export class SharedModule { }
