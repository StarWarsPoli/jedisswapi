import { Component, OnInit, Input } from '@angular/core';
import { FilmModel } from 'src/app/shared/models/film.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() films: Array<FilmModel>
  constructor() { }

  ngOnInit() {
  }

}
