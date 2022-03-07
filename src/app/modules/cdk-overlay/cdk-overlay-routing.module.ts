import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'form',
        component: FormComponent,
      },
      {
        path: 'dragAndDrop',
        component: DragAndDropComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdkOverlayRoutingModule {}
