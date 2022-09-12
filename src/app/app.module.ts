import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileHomeComponent } from './mobile-home/mobile-home.component';
import { MobileHomeFullComponent } from './full-home/mobile-home-full.component';
import { SearchHomeComponent } from './search-home/search-home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { BookmarkedComponent } from './bookmarked/bookmarked.component';
import { TrendingComponent } from './trending/trending.component';
import { HttpClientModule } from '@angular/common/http';
import { GetMediaServiceseriously } from 'services/get-media.service';
import { FilterService } from './filter.service';
import { SearchPipe } from './search.pipe';
import { MoviesPipe } from './movies.pipe';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    MobileHomeComponent,
    MobileHomeFullComponent,
    SearchHomeComponent,
    MoviesComponent,
    TvSeriesComponent,
    BookmarkedComponent,
    TrendingComponent,
    SearchPipe,
    MoviesPipe,
    CarouselComponent
   
      
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [GetMediaServiceseriously,
              FilterService,
              MoviesPipe,
              SearchPipe
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
