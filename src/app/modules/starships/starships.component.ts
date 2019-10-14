import { Component, OnInit } from '@angular/core';
import { StarshipModel } from 'src/app/shared/models/starship.model';
import { SwapiService } from 'src/app/shared/services/swapi/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starship: StarshipModel;
  param: string;

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.param = params.get('id');
    });
    this.initstarshipById(this.param);
  }

  initstarshipById(paramId) {
    this.swapiService.getStarshipById(paramId).subscribe(resolve => {
      this.starship = resolve;
      console.log(this.starship);
    });
  }
}
