import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/shared/services/swapi/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { PersonModel } from 'src/app/shared/models/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  person: PersonModel;
  param: string;

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.param = params.get('id');
    });
    this.initPersonById(this.param);
  }

  initPersonById(paramId) {
    this.swapiService.getPersonById(paramId).subscribe(resolve => {
      this.person = resolve;
      console.log(this.person);
    });
  }
}
