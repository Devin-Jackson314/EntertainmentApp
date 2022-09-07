import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetMediaService } from '../services/get-media.service';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  //mediaGetRequest: Observable<Media[]>;

  constructor(private mediaService: GetMediaService) {
    

  }
  
  // mediaGetRequest = mediaService.GetMediaService().subscribe();
  //   console.log(this);
  mediaOptions:any
   ngOnInit(): void{
    
   }
  
  GetMedia() {
    return this.mediaService.GetMediaService().subscribe(data =>{
      this.mediaOptions = Object.keys(data).map(key => {
        return{...data[key],uuid:key}
      })
    })
  }

}
