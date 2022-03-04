import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: ListComponent
    },
    {
      path: 'list',
      component: ListComponent
    },
    {
      path: 'form',
      component: FormComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdkOverlayRoutingModule { }
