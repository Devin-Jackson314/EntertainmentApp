import { Component, OnInit } from '@angular/core';
import { GetMediaService } from 'services/get-media.service';
import { MoviesPipe } from '../movies.pipe';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],

})
export class MoviesComponent implements OnInit {

  constructor(private mediaService: GetMediaService,
  private moviesPipe: MoviesPipe) { }
  
 

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
      console.log(this.mediaOptions, "all data");

     
      
      
    })
    
 }
  
 

 

}
