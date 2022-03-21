import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudPracticeComponent } from './crud-practice.component';

const routes: Routes = [
  {
    path: '', component: CrudPracticeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudPracticeRoutingModule {}
