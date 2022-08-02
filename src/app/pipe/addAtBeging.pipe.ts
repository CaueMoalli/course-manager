import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addAtBegining',
})
export class addAtBegining implements PipeTransform {
  transform(value: any, char: string) {
    return char + value;
  }
}
