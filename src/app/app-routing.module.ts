import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: 'dataBinding',
    loadChildren: () =>
      import('./modules/data-binding/data-binding.module').then(
        (m) => m.DataBindingModule
      ),
  },
  {
    path: 'crud-task',
    loadChildren: () =>
      import('./modules/crud-task/crud-task.module').then(
        (m) => m.CrudTaskModule
      ),
  },
  {
    path: 'resume-builder',
    loadChildren: () =>
      import('./modules/resume-builder/resume-builder.module').then(
        (m) => m.ResumeBuilderModule
      ),
  },
  {
    path: 'crud-practice',
    loadChildren: () =>
      import('./modules/crud-practice/crud-practice.module').then(
        (m) => m.CrudPracticeModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./assessment/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'cdk-overlay',
    loadChildren: () =>
      import('./modules/cdk-overlay/cdk-overlay.module').then((m) => m.CdkOverlayModule),
  },
  {
    path: 'ngTemplateOutlet',
    loadChildren: () =>
      import('./modules/ng-template-outlet/ng-template-outlet.module').then((m) => m.NgTemplateOutletModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
