import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListViewComponent } from './components/user-list-view/user-list-view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UserListViewComponent,
      },
      {
        path: 'userList',
        component: UserListViewComponent,
      },
      {
        path: 'userForm',
        component: UserFormComponent,
      },
      {
        path: 'userForm/:id',
        component: UserFormComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
