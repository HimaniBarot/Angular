import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { CrudListComponent } from './components/crud-list/crud-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CrudListComponent,
      },
      {
        path: 'crud-list',
        component: CrudListComponent,
      },
      {
        path: 'crud-form',
        component: CrudFormComponent,
      },
      {
        path: 'edit/:id',
        component: CrudFormComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudPracticeRoutingModule {}
