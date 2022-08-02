import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addAtBegining',
})
export class addAtBegining implements PipeTransform {
  transform(value: number, char: string) {
    return char + value;
  }
}
