import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileListContainerComponent } from './file-list-container/file-list-container.component';
import { FileUploadComponent } from './file-upload.component';

const routes: Routes = [
  {
    path: '', component: FileUploadComponent,
    children: [
      {
        path: 'list',
        component: FileListContainerComponent
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
export class FileUploadRoutingModule { }
