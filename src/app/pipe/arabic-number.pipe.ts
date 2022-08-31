import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arabicNumber'
})
export class ArabicNumberPipe implements PipeTransform {

  transform(n: number, dir:string): string {
    if (n === null || n === undefined ) {
      return '';
    }
    else if (dir == 'ltr') {
      return n.toString();
    }
    return new Intl.NumberFormat('ar-SA', {}).format(n);
  }

}
