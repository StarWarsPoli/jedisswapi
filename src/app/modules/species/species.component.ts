import { Component, OnInit } from '@angular/core';
import { SpeciesModel } from 'src/app/shared/models/species.model';
import { SwapiService } from 'src/app/shared/services/swapi/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  specie: SpeciesModel;
  param: string;

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.param = params.get('id');
    });
    this.initSpecieById(this.param);
  }

  initSpecieById(paramId) {
    this.swapiService.getSpecieById(paramId).subscribe(resolve => {
      this.specie = resolve;
      console.log(this.specie);
    });
  }
}
