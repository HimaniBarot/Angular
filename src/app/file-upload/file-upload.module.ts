import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { FileListPresentationComponent } from './file-list-container/file-list-presentation/file-list-presentation.component';
import { SharedModule } from '../shared/shared.module';
import { FileUploadService } from './file-upload.service';
import { FileUploadPresentationComponent } from './file-list-container/file-upload-presentation/file-upload-presentation.component';
import { FileListContainerComponent } from './file-list-container/file-list-container.component';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadPresentationComponent,
    FileListPresentationComponent,
    FileListContainerComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    SharedModule
  ],
  providers: [
    FileUploadService
  ]
})
export class FileUploadModule { }
