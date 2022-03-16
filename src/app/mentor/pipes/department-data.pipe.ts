import { Pipe, PipeTransform } from '@angular/core';
import { Department } from 'src/app/modules/crud-task/models/department.model';

@Pipe({
  name: 'departmentData'
})
export class DepartmentDataPipe implements PipeTransform {

  transform(value: number, departmentList: Department[] | null): string | undefined {
    return departmentList?.find((e) => e.id == value)?.departmentList;
  }

}
