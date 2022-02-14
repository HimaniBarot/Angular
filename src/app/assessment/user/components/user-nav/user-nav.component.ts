import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/crud-practice/models/crud.model';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent implements OnInit {

  public user: User[];
  filterData: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
