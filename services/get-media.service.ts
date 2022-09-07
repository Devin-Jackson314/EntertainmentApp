import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Media{
  data: [{}];
}


@Injectable({
  providedIn: 'root'
})
export class GetMediaService {

  constructor(private http: HttpClient) { }

  GetMediaService() {

    return this.http.get<Media>("https://mediaplayer-d3beb-default-rtdb.firebaseio.com/");
    
  }
}
