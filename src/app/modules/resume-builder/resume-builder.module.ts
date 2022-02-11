import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeListViewComponent } from './components/resume-list-view/resume-list-view.component';


@NgModule({
  declarations: [
    ResumeFormComponent,
    ResumeViewComponent,
    ResumeListViewComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ResumeFormComponent,
    ResumeViewComponent
  ]
})
export class ResumeBuilderModule { }
