import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormPresentationComponent } from './user-form-container/user-form-presentation/user-form-presentation.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: UserListPresentationComponent
  },
  {
    path: 'form',
    component: UserFormPresentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
