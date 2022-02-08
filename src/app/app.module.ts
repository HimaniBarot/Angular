import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CrudTaskModule } from './modules/crud-task/crud-task.module';
import { DataBindingModule } from './modules/data-binding/data-binding.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormModule } from './modules/reactive-form/reactive-form.module';
import { ResumeBuilderModule } from './modules/resume-builder/resume-builder.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    DataBindingModule,
    CrudTaskModule,
    ReactiveFormModule,
    ResumeBuilderModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
