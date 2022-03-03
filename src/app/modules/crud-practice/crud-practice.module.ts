import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudPracticeRoutingModule } from './crud-practice-routing.module';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { CrudListComponent } from './components/crud-list/crud-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CrudFormComponent,
    CrudListComponent
  ],
  imports: [
    CommonModule,
    CrudPracticeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CrudFormComponent,
    CrudListComponent
  ],
})
export class CrudPracticeModule {}
