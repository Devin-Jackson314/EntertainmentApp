
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
  image: any;
  mediaOptions: any;
  thumbnail: any;
  mediachoice: any;
   small: any;
   ngOnInit(): void{
     this.GetMedia();
   }
  
  GetMedia() {

   
    return this.mediaService.getAllMedia().subscribe((data) => {
      
      this.mediaOptions = data;
      console.log(this.mediaOptions);
      console.log(this.mediaOptions[0].thumbnail);
      this.mediachoice = this.mediaOptions[0].thumbnail;
      console.log(this.mediachoice.trending);
      this.small = this.mediachoice.trending.small;
      console.log(this.small);

      
      this.image = document.createElement("img");
      this.image.setAttribute("src", this.small);
      this.image.setAttribute("height", "140px");
      this.image.setAttribute("width", "240px");
      this.image.setAttribute("alt", "image");
      this.image.setAttribute("class", "img-responsive");
      document.getElementsByClassName(".images").appendChild(this.image);
    })
  }

}
