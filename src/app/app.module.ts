import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DataBindingModule } from './modules/data-binding/data-binding.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/components/interceptor/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    DataBindingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
