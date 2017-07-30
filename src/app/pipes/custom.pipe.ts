import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, args?: number): string {
    let part1 = value.substr(0, args);
    let char = value.charAt(args).toUpperCase();
    let part2 = value.substr(args + 1, value.length);
    return part1 + char + part2;
  }
}
