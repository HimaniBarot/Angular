import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../model/user.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: User[], searchData: string): User[] {
    if (searchData === '') {
      return value;
    }
    searchData = searchData.toString().toLowerCase();
    return value.filter((data) => {
      return data.name.toLowerCase().includes(searchData);
    });
  }

}
