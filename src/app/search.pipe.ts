import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    let resultArray = [];
    if (value.length === 0 || filterString ==='') {
      return value;
    }
    for (const item of value) {
      let filterItem = item[propName].toLowerCase();
      let theString = filterString.toLowerCase();
      
      //console.log(filterItem);
      //console.log(theString);
      if (filterItem.includes(theString)) {
        resultArray.push(item);
      }
      
    }
      return resultArray;
    
    }
  }

//| search: searchFilter: 'TV Series'
//  if (item[propName] === filterString) {
//         resultArray.push(item);
//       }