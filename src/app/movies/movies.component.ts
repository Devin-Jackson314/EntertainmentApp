import { Component, OnInit } from '@angular/core';
import { MoviesPipe } from '../movies.pipe';

import { GetMediaServiceseriously } from 'services/get-media.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],

})
export class MoviesComponent implements OnInit {
  indexOf: any;
  public searchFilter: any = '';
 

  constructor(private getmedia: GetMediaServiceseriously,
  private moviesPipe: MoviesPipe) { }
  
 

  image: any;
  image2: any;
  images: any;
  mediaOptions: any;
  mediaOptions1: any;
  thumbnail: any;
  mediachoice: any;
  small: any;
  mediachoice2: any;
  small2: any;
  regular: any;
  data1: any;
  data: any;
  newData: any;


  ngOnInit(): void {
    this.GetMedia();
  
   

  }

  GetMedia() {
    return this.getmedia.getAllMedia().subscribe((data) => {
      
      this.mediaOptions = data;
      console.log(this.mediaOptions, "all data");
    })
  
  

  }

  bookmarkProcess(status:boolean,title:string) {

   this.indexOf = this.findIndex(title)
    this.getmedia.bookmarkToggle(status,this.indexOf)
   
   }
   
  findIndex(title: string) {

    let k = this.mediaOptions.findIndex((c: { title: string} )=>c.title === title )
    return k;

   }
   
  
 
  
 

 

}
