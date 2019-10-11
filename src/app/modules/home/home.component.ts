import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/shared/services/swapi/swapi.service';
import { FilmModel } from 'src/app/shared/models/film.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  films: FilmModel[]

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    this.initFilms()
  }

  initFilms() {
    this.swapiService.getAllFilms().subscribe(resolve => {
      this.films=resolve.results
      console.log(resolve)
    })
  }
}
