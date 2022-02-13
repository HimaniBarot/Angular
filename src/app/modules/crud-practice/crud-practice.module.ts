import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudPracticeRoutingModule } from './crud-practice-routing.module';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { CrudListComponent } from './components/crud-list/crud-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    CrudFormComponent,
    CrudListComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    CommonModule,
    CrudPracticeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CrudFormComponent,
    CrudListComponent,
    ParentComponent,
    ChildComponent,
  ],
})
export class CrudPracticeModule {}
