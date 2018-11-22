import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class MovieServiceService {

  private omdb = '//www.omdbapi.com/?t=';

  constructor(private http: Http) { }

  search(term: string): Observable<any> {
    return this.http.get(this.omdb + term + '&apikey=1b86e27f')
      .map(response => {
        return response.json() as string
    })
  }
}