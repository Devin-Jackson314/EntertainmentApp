import { Component, OnInit } from '@angular/core';
import { GetMediaService } from 'services/get-media.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css']
})
export class TvSeriesComponent implements OnInit {

  constructor(private getmedia: GetMediaService) { }

  ngOnInit(): void {
   
  }

  // getMedia() {
  //   return this.mediaService.getAllMedia().subscribe((data){
  //     this
  //   }) 
  
  

}
