import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { MovieServiceService } from '../movie-service.service';
import { observable } from 'rxjs';
@Component({
  selector: 'app-movieapi',
  templateUrl: './movieapi.component.html',
  styleUrls: ['./movieapi.component.css'],
  providers: [MovieServiceService]
})
export class MovieapiComponent implements OnInit{
  message: string;
  movie: any;
  movieFound: boolean;
  moviePoster: string;
 
  constructor(    
    private movieServiceService: MovieServiceService,
  ) { }

  ngOnInit() {
  }

  searchMovies(term: string): void {
    this.movieServiceService.search(term).subscribe(res => {
      if (res.Response === 'True') {
        
        this.movie = res
        const index = 0;
        this.searches.push(this.movie.Title)
        if(this.searches.length>5)
        {
          
          this.searches.splice(index, 1)
        }
        console.log(index)
        console.log(this.searches.length)
        if (this.movie.Poster != 'N/A') {
          this.moviePoster = this.movie.Poster
        } else {
          this.moviePoster = ''
        }
        this.movieFound = true
      } else {
        this.movieFound = false
        this.message = 'No movie was found that matched your search.'
      }
    });
    console.log(term, this.movie)

    
  }
  showDropDown = false;

  toggleDropDown(){
    //this.showDropDown = !this.showDropDown;
    this.showDropDown = true;
  }
  DropDown(){
    this.showDropDown = !this.showDropDown;
  }
    searches  = [];
 }
