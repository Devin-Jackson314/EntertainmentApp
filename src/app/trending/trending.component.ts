import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetMediaService } from '../services/get-media.service';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor() { }


  mediaGetRequest: Observable<Media[]>

  ngOnInit(): void {
  }

}
