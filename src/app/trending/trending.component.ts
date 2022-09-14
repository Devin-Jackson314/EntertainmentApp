
import { Component, OnInit } from '@angular/core';
//import { GetMediaService } from '../services/get-media.service';
import { GetMediaServiceseriously } from 'services/get-media.service';




@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  //mediaGetRequest: Observable<Media[]>;

  constructor(private mediaService: GetMediaServiceseriously) {
    

  }
  searchFilter = '';
  image: any;
  image2: any;
  images: any;
  mediaOptions: any;
  thumbnail: any;
  mediachoice: any;
  small: any;
  mediachoice2: any;
  small2: any;
  regular: any;

   ngOnInit(): void{
     this.GetMedia();
   
   }
  
  GetMedia() {

   
    return this.mediaService.getAllMedia().subscribe((data) => {
      
      this.mediaOptions = data;
     
      
    })
  }

}
