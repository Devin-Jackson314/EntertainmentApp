import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AllMedia } from 'src/app/classes/all-media';



@Injectable({
  providedIn: 'root'
})
export class GetMediaService {

  dataUrl = 'https://mediaplayer-d3beb-default-rtdb.firebaseio.com/';
  jsonEXT ='.json'

  constructor(private http: HttpClient) { }

 getMedia(): Observable<any> {
    
   return this.http.get<AllMedia>(this.dataUrl);
  
   
 }
  
}
 console.log(AllMedia);

