import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
export interface Crud {
  id: number;
  name: string;
  email: string;
  company: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private data: Crud[] = [
    {
      id: 1,
      name: "Himani",
      email: "himani@gmail.com",
      company: "1Rivet"
    }
  ];
  private nextId = 1;

  private _list = new BehaviorSubject<Crud[]>(this.data);
  public list$: Observable<Crud[]>;

  private _listToEdit = new Subject<Crud>();
  public listToEdit$ = new Observable<Crud>();

  constructor() {
    this.list$ = this._list.asObservable();
    this.listToEdit$ = this._listToEdit.asObservable();
    this._list.next(this.data);
  }

  /** Create data */
  create(item: Crud) {
    item.id = ++this.nextId;
    this.data.push(item);
    console.log("service", this.data);
    this._list.next(this.data);
  }

  updateData(id: number, data: Crud) {
    let index = this.data.findIndex((item) => item.id == id)
    this.data[index] = data;
    this.data[index].id = id;
    this._list.next(this.data);
  }

  editData(newData: Crud): void {
    this._listToEdit.next(newData);
  }

  /** Delete data */
  deleteData(id: number): void {
    this.data.splice(this.data.findIndex((val) => id == val.id), 1);
  }
}
