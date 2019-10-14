import { Component, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/shared/models/person.model';
import { SwapiService } from 'src/app/shared/services/swapi/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { PlanetModel } from 'src/app/shared/models/planet.model';
import { FilmModel } from 'src/app/shared/models/film.model';
import { SpeciesModel } from 'src/app/shared/models/species.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  films: FilmModel[];
  people: PersonModel[];
  planets: PlanetModel[];
  species: SpeciesModel[];
  param: string;

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.param = params.get('id');
    });
    this.initPeople();
    this.initPlanets();
    this.initFilms();
    this.initSpecies();
  }

  initFilms() {
    this.swapiService.getAllFilms().subscribe(resolve => {
      this.films = resolve.results;
      console.log(resolve);
    });
  }

  initPeople() {
    this.swapiService.getPeople().subscribe(resolve => {
      this.people = resolve.results;
      console.log(resolve);
    });
  }

  initPlanets() {
    this.swapiService.getPlanets().subscribe(resolve => {
      this.planets = resolve.results;
      console.log(resolve);
    });
  }

  initSpecies() {
    this.swapiService.getSpecies().subscribe(resolve => {
      this.species = resolve.results;
      console.log(resolve);
    });
  }
}
