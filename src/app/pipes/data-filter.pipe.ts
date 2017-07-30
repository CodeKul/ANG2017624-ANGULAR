import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
  // pure: false
})
export class DataFilterPipe implements PipeTransform {

  transform(value: string[], args?: string): string[] {
    let filtered: string[] = [];

    if (args) {
      value.forEach(el => {
        if (el.charAt(0) === args) {
          filtered.push(el);
        }
      });
      return filtered;
    }
    return value;
  }
}
