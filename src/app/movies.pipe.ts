import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movies'
})
export class MoviesPipe implements PipeTransform {
 
  transform(value: any){
    let movieArray: { category: string; }[] = [];
    value.array.forEach((element: { category: string }) => {
      if (element.category == 'Movie') {
        movieArray.push(element);  
      }
    });
    console.log(movieArray);
    return movieArray;

  }

}
