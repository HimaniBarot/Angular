import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiStepContainerComponent } from './multi-step-container/multi-step-container.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'multi-step-form', pathMatch: 'full'
  },
  {
    path: 'multi-step-form', component: MultiStepContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvpRoutingModule { }
