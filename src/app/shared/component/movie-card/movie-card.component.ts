import { Component, OnInit } from "@angular/core";
import { Imovie } from "../../model/movies";
import { movieArray } from "../../const/movies";


@Component({
  selector:'app-movie-card',
  templateUrl:'./movie-card.component.html',
  styleUrls:['./movie-card.component.scss']
})


export class moviecomponent implements OnInit{
Moviedata : Array<Imovie> = [];

  constructor(){}

  ngOnInit(): void {
   this.Moviedata = movieArray
  }
}
