import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { MentorListContainerComponent } from './mentor-list-container/mentor-list-container.component';
import { MentorFormContainerComponent } from './mentor-form-container/mentor-form-container.component';
import { MentorFormPresentationComponent } from './mentor-form-container/mentor-form-presentation/mentor-form-presentation.component';
import { MentorListPresentationComponent } from './mentor-list-container/mentor-list-presentation/mentor-list-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MentorService } from './service/mentor.service';
import { DepartmentDataPipe } from './pipes/department-data.pipe';
import { FilterDataPresentationComponent } from './mentor-list-container/mentor-list-presentation/filter-data-presentation/filter-data-presentation.component';


@NgModule({
  declarations: [
    MentorComponent,
    MentorListContainerComponent,
    MentorFormContainerComponent,
    MentorListPresentationComponent,
    MentorFormPresentationComponent,
    DepartmentDataPipe,
    FilterDataPresentationComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MentorService]
})
export class MentorModule { }
