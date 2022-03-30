import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileDragDropComponent } from './file-drag-drop.component';
import { ListContainerComponent } from './list-container/list-container.component';

const routes: Routes = [
  {
    path: '', component: FileDragDropComponent,
    children: [
      {
        path: 'list',
        component: ListContainerComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileDragDropRoutingModule { }
