import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { GetMediaService } from 'services/get-media.service';
import { FilterService } from './filter.service';

@NgModule({
  declarations: [
    AppComponent,
    MobileHomeComponent,
    MobileHomeFullComponent,
    SearchHomeComponent,
    MoviesComponent,
    TvSeriesComponent,
    BookmarkedComponent,
    TrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetMediaService,
              FilterService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
