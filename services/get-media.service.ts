import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllMedia } from 'src/app/classes/all-media';



@Injectable({
  providedIn: 'root'
})
export class GetMediaService {

  dataUrl = 'https://mediaplayer-d3beb-default-rtdb.firebaseio.com/.json';
  jsonEXT ='.json'

  constructor(private http: HttpClient) { }

 getAllMedia(): Observable<any> {
    
   return this.http.get<AllMedia>(this.dataUrl);
  
   
 }
  
}
 //console.log(AllMedia);

