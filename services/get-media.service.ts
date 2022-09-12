import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class GetMediaServiceseriously {

  fireBaseUrl = "https://mediaplayer-d3beb-default-rtdb.firebaseio.com/";
  jsonExt = ".json";
  Url = `${this.fireBaseUrl}${this.jsonExt}`
  constructor(private http: HttpClient) { }

 getAllMedia() {
    
   return this.http.get('https://mediaplayer-d3beb-default-rtdb.firebaseio.com/.json');
  
   
 }
  bookmarkToggle(status: boolean, theIndex: string) {
    let bookmarkUrl = `${this.fireBaseUrl}${theIndex}${this.jsonExt}`
    console.log(bookmarkUrl);
    return this.http.patch<any>(bookmarkUrl, { isBookmarked: status })
  }
  
}
 //console.log(AllMedia);

