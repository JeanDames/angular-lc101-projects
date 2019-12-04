import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string) {
      let error : string = '';
      if(!this.movies.includes(newTitle) || newTitle !== ""){
         this.movies.push(newTitle);
      }
   }
}