import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserFormPresentationComponent } from './user-form-container/user-form-presentation/user-form-presentation.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MvpUserService } from './service/mvp-user.service';


@NgModule({
  declarations: [
    UserComponent,
    UserListContainerComponent,
    UserFormContainerComponent,
    UserListPresentationComponent,
    UserFormPresentationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MvpUserService]
})
export class UserModule { }
