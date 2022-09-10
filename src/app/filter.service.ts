import { Injectable } from '@angular/core';
import { Media } from './services/get-media.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }
}


// i need to access the data on the dom 
//i need to filter that data 
//i need to transform the filter data to only the data i need when something is typed in the search bar  i will need a pipe for this 
//then i maybe need to pass the pipe to the filter service but i should be able to access the pipe regardless