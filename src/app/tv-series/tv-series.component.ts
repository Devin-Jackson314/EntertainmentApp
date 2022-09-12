import { Component, OnInit } from '@angular/core';
import { GetMediaServiceseriously } from 'services/get-media.service';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css']
})
export class TvSeriesComponent implements OnInit {
  public searchFilter: any = '';
  

  constructor(private getmedia: GetMediaServiceseriously) { }
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