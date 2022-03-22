import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { ResumeListViewComponent } from './components/resume-list-view/resume-list-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ResumeFormComponent,
    ResumeViewComponent,
    ResumeListViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ResumeBuilderRoutingModule,
  ]
})
export class ResumeBuilderModule { }
