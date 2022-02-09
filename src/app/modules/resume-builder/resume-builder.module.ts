import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuilderComponent } from './resume-builder.component';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeListViewComponent } from './components/resume-list-view/resume-list-view.component';


@NgModule({
  declarations: [
    ResumeBuilderComponent,
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
    ResumeBuilderComponent,
    ResumeFormComponent,
    ResumeViewComponent
  ]
})
export class ResumeBuilderModule { }
