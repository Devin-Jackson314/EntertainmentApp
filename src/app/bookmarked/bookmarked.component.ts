import { Component, OnInit } from '@angular/core';
import { GetMediaServiceseriously } from 'services/get-media.service';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.css']
})
export class BookmarkedComponent implements OnInit {

  constructor(private mediaService: GetMediaServiceseriously) { }
 mediaOptions: any;
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
