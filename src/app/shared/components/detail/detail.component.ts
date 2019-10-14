import { Component, OnInit, Input } from '@angular/core';
import { FilmModel } from '../../models/film.model';
import { PersonModel } from '../../models/person.model';
import { PlanetModel } from '../../models/planet.model';
import { SpeciesModel } from '../../models/species.model';
import { VehicleModel } from '../../models/vehicle.model';
import { StarshipModel } from '../../models/starship.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() film: FilmModel;
  @Input() person: PersonModel;
  @Input() planet: PlanetModel;
  @Input() specie: SpeciesModel;
  @Input() vehicle: VehicleModel;
  @Input() starship: StarshipModel;

  constructor() {}

  ngOnInit() {}
}
