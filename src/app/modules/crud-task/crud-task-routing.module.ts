import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ListViewComponent } from './components/list-view/list-view.component';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: '',
        component: ListViewComponent,
      },
      {
        path: 'list-view',
        component: ListViewComponent,
      },
      {
        path: 'employee-form',
        component: EmployeeFormComponent,
      },
      {
        path: 'employee-form/:id',
        component: EmployeeFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudTaskRoutingModule {}
