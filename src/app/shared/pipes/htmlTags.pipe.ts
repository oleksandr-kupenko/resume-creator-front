import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlTags',
})
export class HtmlTagsPipe implements PipeTransform {
  transform(value: string | number | undefined) {
    if (value) {
      return '22';
    } else {
      return '';
    }
  }
}

//example {{phoneNuber | phone}}
