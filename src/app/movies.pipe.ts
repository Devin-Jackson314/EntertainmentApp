import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movies'
})
export class MoviesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
