import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl: string = 'http://www.omdbapi.com/?apikey=9eb2f216'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient) { }

  searchMovies(searchTerm: string): Observable<any>{
    return this.http.get(baseUrl, {params:{s : searchTerm}});
  }
}
