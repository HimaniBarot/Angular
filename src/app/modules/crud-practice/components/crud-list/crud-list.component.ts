import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Crud, CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss']
})
export class CrudListComponent implements OnInit {

  data$: Observable<Crud[]>;

  constructor(private crudService: CrudService) {}
  
  ngOnInit(): void {
    this.data$ = this.crudService.list$;
  }

  editItem(item: Crud){
    this.crudService.editData(item);
    // console.log(item);    
  }

  deleteItem(id: number): void {
    this.crudService.deleteData(id);
  }
}
