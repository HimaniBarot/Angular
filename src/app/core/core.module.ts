import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// ---------------------------------------------------------------------------------//
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// ---------------------------------------------------------------------------------//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, BrowserModule, RouterModule, BrowserAnimationsModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
})
export class CoreModule {}
