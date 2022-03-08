import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudTaskRoutingModule } from './crud-task-routing.module';
import { ListViewComponent } from './components/list-view/list-view.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { DepartmentListPipe } from './pipes/departentList/department-list.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    ListViewComponent,
    EmployeeFormComponent,
    DepartmentListPipe,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    CrudTaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    DragDropModule
  ],
  exports: [ListViewComponent, EmployeeFormComponent],
})
export class CrudTaskModule {}
