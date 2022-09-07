import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Media, GetMediaService } from '../services/get-media.service';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  mediaGetRequest: Observable<Media[]>;
  
  constructor(private mediaService: GetMediaService) {
    this.mediaGetRequest = this.mediaService.GetMediaService();
   }


 

  ngOnInit(): void {
  }

}
