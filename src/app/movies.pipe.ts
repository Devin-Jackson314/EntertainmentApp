import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movies'
})
export class MoviesPipe implements PipeTransform {

  transform(value: any, args?:any): any {
    
  }

}
