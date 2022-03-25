import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { UserListViewComponent } from './components/user-list-view/user-list-view.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { AddressFormArrayComponent } from './components/address-form-array/address-form-array.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserListViewComponent,
    UserFormComponent,
    FilterPipe,
    UserNavComponent,
    UserTableComponent,
    AddressFormArrayComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
  ],
})
export class UserModule { }
