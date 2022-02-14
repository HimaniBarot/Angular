import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../../model/user.model';

@Pipe({
  name: 'department'
})
export class DepartmentPipe implements PipeTransform {

  transform(value: number, departmentList: Department[]): string | undefined {
    return departmentList?.find((e) => e.id == value)?.departmentList;
  }

}
