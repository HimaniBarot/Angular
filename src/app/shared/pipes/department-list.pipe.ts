import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../models/department.model';

@Pipe({
  name: 'departmentList'
})
export class DepartmentListPipe implements PipeTransform {

  transform(value: number, departmentList: Department[] | null): string | undefined {
    return departmentList?.find((e) => e.id == value)?.departmentList;
  }

}
