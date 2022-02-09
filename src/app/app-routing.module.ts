import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'crud-task',
  },
  {
    path: 'crud-task',
    loadChildren: () =>
      import('./modules/crud-task/crud-task.module').then(
        (m) => m.CrudTaskModule
      ),
  },
  // {
  //   path: 'data-binding',
  //   loadChildren: () =>
  //     import('./modules/data-binding/data-binding.module').then(
  //       (m) => m.DataBindingModule
  //     ),
  // },
  // {
  //   path: 'reactive-form',
  //   loadChildren: () =>
  //     import('./modules/reactive-form/reactive-form.module').then(
  //       (m) => m.ReactiveFormModule
  //     ),
  // },
  {
    path: 'resume-builder',
    loadChildren: () =>
      import('./modules/resume-builder/resume-builder.module').then(
        (m) => m.ResumeBuilderModule
      ),
  },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
