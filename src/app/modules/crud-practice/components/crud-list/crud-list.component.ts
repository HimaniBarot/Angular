import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Brand } from '../../models/crud.model';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss'],
})
export class CrudListComponent implements OnInit {
  // @Input() brands: Brand[];

  // constructor() {}

  ngOnInit(): void {}

  // title = 'toolsets';
  // parentSelector: boolean = false;
  food = [
    { id: 1, select: false, name: 'dumpling' },
    { id: 2, select: true, name: 'burger' },
    { id: 3, select: true, name: 'sandwich' },
  ];

  // onChangeFood(event) {
  // console.log(event.target);
  // const id = event.target.value;
  // console.log(id);
  getValue(event: Event) {
    // return (event.target as HTMLInputElement).value;
    console.log((event.target as HTMLInputElement).value + 'is checked');
    // }
    // const isChecked = $event.target.checked;

    // this.food = this.food.map((d) => {
    //   if (d.id == id) {
    //     d.select = isChecked;
    //     this.parentSelector = false;
    //     return d;
    //   }
    //   if (id == -1) {
    //     d.select = this.parentSelector;
    //     return d;
    //   }
    //   return d;
    // });
    // console.log(this.food);
  }
}
