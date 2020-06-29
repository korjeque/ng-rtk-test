import {Pipe, PipeTransform} from '@angular/core';
import {Employee} from '../models/employee';

@Pipe({
  name: 'emailWithInitials'
})
export class EmailWithInitialsPipe implements PipeTransform {

  transform(value: Employee): unknown {
    let result = '';
    if (value?.name?.first) {
      result = result + value.name.first.charAt(0).toLocaleUpperCase() + '.';
    }
    if (value?.name?.last) {
      result = result + value.name.last.charAt(0).toLocaleUpperCase();
    }
    if (value?.email) {
      result = result + ' - ' + value.email;
    }
    return result;
  }

}
