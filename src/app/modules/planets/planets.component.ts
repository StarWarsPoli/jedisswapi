import { Component, OnInit } from '@angular/core';
import { PlanetModel } from 'src/app/shared/models/planet.model';
import { SwapiService } from 'src/app/shared/services/swapi/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planet: PlanetModel;
  param: string;

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.param = params.get('id');
    });
    this.initPlanetById(this.param);
  }

  initPlanetById(paramId) {
    this.swapiService.getPlanetById(paramId).subscribe(resolve => {
      this.planet = resolve;
      console.log(this.planet);
    });
  }
}
