import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkedComponent } from './bookmarked/bookmarked.component';
import { MoviesComponent } from './movies/movies.component';
import { TrendingComponent } from './trending/trending.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  { path: 'movies', component: MoviesComponent },
  { path: "home", component: TrendingComponent },
  { path: "tv-shows", component: TvSeriesComponent },
  {path: "bookmarks", component: BookmarkedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
