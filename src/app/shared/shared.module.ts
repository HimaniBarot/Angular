import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './components/delete/delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DepartmentListPipe } from './pipes/department-list.pipe';
import { ChooseFileComponent } from './components/choose-file/choose-file.component';
import { FileDragDropDirective } from './directive/file-drag-drop.directive';
@NgModule({
  declarations: [
    DeleteComponent,
    DepartmentListPipe,
    ChooseFileComponent,
    FileDragDropDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    DepartmentListPipe,
    ChooseFileComponent,
    FileDragDropDirective
  ]
})
export class SharedModule { }
