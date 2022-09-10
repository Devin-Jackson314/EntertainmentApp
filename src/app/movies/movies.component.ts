import { Component, OnInit } from '@angular/core';
import { GetMediaService } from 'services/get-media.service';
import { MoviesPipe } from '../movies.pipe';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private mediaService: GetMediaService) { }

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

  ngOnInit(): void {
    this.GetMedia();


  }

  GetMedia() {

   
    return this.mediaService.getAllMedia().subscribe((data) => {
      
      this.mediaOptions = data;
      console.log(this.mediaOptions, "this is all data");
      console.log(this.mediaOptions[0].thumbnail, "data inside targeted thumbnail");
      this.mediachoice = this.mediaOptions[0].thumbnail;
      console.log(this.mediachoice.trending);
      this.small = this.mediachoice.trending.small;
      console.log(this.small, "the targeted image");

    

      
    

    
      

     
         console.log(this.mediaOptions[0].thumbnail.regular.small)
       
         this.regular = this.mediaOptions[0].thumbnail.regular.small;
     
    })
  }

 

}
