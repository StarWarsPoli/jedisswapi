import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from 'src/app/shared/services/swapi/swapi.service';
import { FilmModel } from 'src/app/shared/models/film.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  film: FilmModel;
  param: string;

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.param = params.get('id');
    });
    this.initFilmById(this.param);
  }

  initFilmById(paramId) {
    this.swapiService.getFilmById(paramId).subscribe(resolve => {
      this.film = resolve;
    });
  }
}
