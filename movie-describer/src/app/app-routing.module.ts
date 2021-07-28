import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'home'
  },
  {
    path :'home',
    component: HomeComponent
  },
  {
    path:'movies',
    component: MovieListComponent
  },
  {
    path:'movie-details/:imdbID',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
