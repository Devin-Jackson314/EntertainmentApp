import { Component, OnInit } from '@angular/core';
import { GetMediaServiceseriously } from 'services/get-media.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  mediaOptions: any;

  constructor(private mediaService: GetMediaServiceseriously) { }

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
