import { Component, OnInit, Input } from '@angular/core';
import { FilmModel } from 'src/app/shared/models/film.model';
import { SwapiService } from 'src/app/shared/services/swapi/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() filmURL: string;
  film: FilmModel;

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.filmURL) {
      this.initFilmByAllURL(this.filmURL);
    }
  }

  initFilmByAllURL(filmURL) {
    this.swapiService.getFilmByAllURL(filmURL).subscribe(resolve => {
      this.film = resolve;
    });
  }

}
