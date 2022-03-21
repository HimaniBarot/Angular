import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudPracticeRoutingModule } from './crud-practice-routing.module';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { CrudListComponent } from './components/crud-list/crud-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudPracticeComponent } from './crud-practice.component';
import { CrudService } from './services/crud.service';

@NgModule({
  declarations: [
    CrudFormComponent,
    CrudListComponent,
    CrudPracticeComponent
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
  providers: [CrudService]
})
export class CrudPracticeModule {}
