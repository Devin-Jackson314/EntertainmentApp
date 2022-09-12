
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
  searchFilter: any;
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
      console.log(this.mediaOptions, "this is all data");
      // this.mediaOptions.
      // let slides = [];
      // slides.push(data);
      // console.log(slides);

      // console.log(this.mediaOptions[0].thumbnail, "data inside targeted thumbnail");
      // this.mediachoice = this.mediaOptions[0].thumbnail;
      // console.log(this.mediachoice.trending);
      // this.small = this.mediachoice.trending.small;
      // console.log(this.small, "the targeted image");

      
      // this.image = document.createElement("img");
      // this.image.setAttribute("src", this.small);
      // this.image.setAttribute("height", "140px");
      // this.image.setAttribute("width", "240px");
      // this.image.setAttribute("alt", "image");
      // this.image.setAttribute("class", "img-responsive");
      // document.getElementById("imagebox")?.appendChild(this.image);

      // console.log(this.mediaOptions[1].thumbnail, "bottom gear thumbnail");
      // this.mediachoice2 = this.mediaOptions[1].thumbnail;
      // console.log(this.mediachoice.trending);
      // this.small2 = this.mediachoice2.trending.small;
      // console.log(this.small2, "the targeted image");
      
      // this.image2 = document.createElement("img");
      // this.image2.setAttribute("src", this.small2);
      // this.image2.setAttribute("height", "148px");
      // this.image2.setAttribute("width", "240px");
      // this.image2.setAttribute("alt", "image");
      // this.image2.setAttribute("class", "img-responsive");
      // document.getElementById("imagebox")?.appendChild(this.image2);

      // for (const i in data) {
         //console.log(this.mediaOptions[0].thumbnail.regular.small)
        //console.log(i,this.mediaOptions[0].thumbnail.regular.small,"second thumbnail reference");
         //this.regular = this.mediaOptions[0].thumbnail.regular.small;
         //console.log(this.regular, "variable i saved the data in");
          
      //    this.images = document.createElement("img");
      //    this.images.setAttribute("src", this.regular);
      //    this.images.setAttribute("height", "110px");
      //    this.images.setAttribute("width", "164px");
      //    this.images.setAttribute("alt", "image");
      //    this.images.setAttribute("class", "img-responsive");
      //   document.getElementById("imagebox2")?.appendChild(this.images);

      //   //maybe i should do a ng for instead


      // }
    })
  }

}
