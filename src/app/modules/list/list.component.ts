import { Component, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/shared/models/person.model';
import { SwapiService } from 'src/app/shared/services/swapi/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { PlanetModel } from 'src/app/shared/models/planet.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  people: PersonModel[];
  planets:PlanetModel[];
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
      console.log("planetas");
    });
  }
}
