import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoListContainerComponent } from './demo-list-container/demo-list-container.component';

const routes: Routes = [
  {
    path: '', component: DemoListContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
