import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CrudTaskModule } from './modules/crud-task/crud-task.module';
import { HttpClientModule } from '@angular/common/http';
import { ResumeBuilderModule } from './modules/resume-builder/resume-builder.module';
import { CrudPracticeModule } from './modules/crud-practice/crud-practice.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    CrudTaskModule,
    ResumeBuilderModule,
    HttpClientModule,
    CrudPracticeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
