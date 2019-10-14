import { Component, OnInit, Input } from '@angular/core';
import { PersonModel } from 'src/app/shared/models/person.model';
import { SwapiService } from 'src/app/shared/services/swapi/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() personURL: string;
  person: PersonModel;

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.personURL) {
      this.initPersonByAllURL(this.personURL);
    }
  }

  initPersonByAllURL(personURL) {
    this.swapiService.getPersonByAllURL(personURL).subscribe(resolve => {
      this.person = resolve;
    });
  }
}
