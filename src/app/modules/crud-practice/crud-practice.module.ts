import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudPracticeRoutingModule } from './crud-practice-routing.module';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { CrudListComponent } from './components/crud-list/crud-list.component';
import { CrudPracticeComponent } from './crud-practice.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CrudFormComponent,
    CrudListComponent,
    CrudPracticeComponent
  ],
  imports: [
    CommonModule,
    CrudPracticeRoutingModule,
    SharedModule
  ],
  providers: []
})
export class CrudPracticeModule {}
