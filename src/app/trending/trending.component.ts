
import { Component, OnInit } from '@angular/core';
//import { GetMediaService } from '../services/get-media.service';
import { GetMediaService } from 'services/get-media.service';


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
  thumbnail: any;

   ngOnInit(): void{
     this.GetMedia();
   }
  
  GetMedia() {

   
    return this.mediaService.getAllMedia().subscribe((data) => {
      
      
     // for (let thumbnail in mediaChoices) {
       //thumbnail{} 
       // console.log(thumbnail[1], 'this is the thumbnail');
       //let trending = mediaChoices[thumbnail];
        
     // }
       
     // for (let key in data) {
       // console.log(key);
        
        

          // }
      
      this.mediaOptions = data;
      console.log(this.mediaOptions);
      console.log(this.mediaOptions[this.thumbnail]);
    })
  }

}
