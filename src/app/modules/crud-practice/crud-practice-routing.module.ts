import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { CrudListComponent } from './components/crud-list/crud-list.component';
import { ParentComponent } from './components/parent/parent.component';

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
        path: 'parent',
        component: ParentComponent,
      },
      {
        path: 'child',
        component: ChildComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudPracticeRoutingModule {}
