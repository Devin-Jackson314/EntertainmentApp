import { keyframes } from '@angular/animations';
import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetMediaService } from '../services/get-media.service';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  //mediaGetRequest: Observable<Media[]>;

  constructor(private mediaService: GetMediaService) {
    

  }

  mediaOptions: any;

   ngOnInit(): void{
     this.GetMedia();
   }
  
  GetMedia() {

   
    // return this.mediaService.getAllMedia().subscribe((data) =>{
    //  // this.mediaOptions = Object.keys(data).map(key => {
         
    //     //return { ...data[key, uuid:key}
    //  // })
    //   this.mediaOptions = data;
    //   console.log(this.mediaOptions);
    // })
  }

}
