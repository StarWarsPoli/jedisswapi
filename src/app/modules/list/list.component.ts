import { Component, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/shared/models/person.model';
import { SwapiService } from 'src/app/shared/services/swapi/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  people: PersonModel[];
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
  }

  initPeople() {
    this.swapiService.getPeople().subscribe(resolve => {
      this.people = resolve.results;
      console.log(resolve);
    });
  }
}
