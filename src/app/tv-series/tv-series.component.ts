import { Component, OnInit } from '@angular/core';
import { GetMediaService } from 'services/get-media.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css']
})
export class TvSeriesComponent implements OnInit {

  constructor(private getmedia: GetMediaService) { }
  mediaOptions: any;
  ngOnInit(): void {
    this.GetMedia();
   
  }

  GetMedia() {
    return this.getmedia.getAllMedia().subscribe((data) => {
      
      this.mediaOptions = data;
      console.log(this.mediaOptions, "all data");
    })
  
  

  }
}