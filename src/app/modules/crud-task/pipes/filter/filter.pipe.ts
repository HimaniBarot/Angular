import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(emp: Employee[], searchData: string): Employee[] {
    if (searchData === '') {
      return emp;
    }
    searchData = searchData.toString().toLowerCase();
    return emp.filter((data) => {
      return data.firstName.toLowerCase().includes(searchData);
    });
  }
}
