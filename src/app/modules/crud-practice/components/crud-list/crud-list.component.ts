import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/crud.model';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss']
})
export class CrudListComponent implements OnInit {

  employees: Employee[];
  // name: string;

  constructor(private crudService: CrudService, private router: Router) {
  }
  
  ngOnInit(): void {
    this.employees = this.getEmployees();
  }

  onClick(id: number): void {
    console.log(this.crudService.getById(id));
  }

  getEmployees(): Employee[] {
    return this.crudService.getData();
  }
  editEmployee(id: number): void {
    this.router.navigateByUrl(`/crud-practice/edit/${id}`);
  }
  deleteEmployee(id: number): void {
    this.crudService.deleteData(id);
  }
}
