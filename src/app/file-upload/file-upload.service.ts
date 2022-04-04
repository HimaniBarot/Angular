import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyFile } from './file.model';

@Injectable()
export class FileUploadService {

  private apiLink: string = "http://localhost:3000/files";

  constructor(
    private http: HttpClient
  ) { }

  getAllFiles(): Observable<MyFile[]> {
    return this.http.get<MyFile[]>(this.apiLink);
  }

  addFile(file: MyFile): Observable<MyFile> {
    return this.http.post<MyFile>(this.apiLink, file);
  }

  /** Delete Mentor */
  deleteFile(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/${id}`);
  }
}
