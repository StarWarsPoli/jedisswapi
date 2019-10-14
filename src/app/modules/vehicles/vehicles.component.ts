import { Component, OnInit } from '@angular/core';
import { VehicleModel } from 'src/app/shared/models/vehicle.model';
import { SwapiService } from 'src/app/shared/services/swapi/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicle: VehicleModel;
  param: string;

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.param = params.get('id');
    });
    this.initVehicleById(this.param);
  }

  initVehicleById(paramId) {
    this.swapiService.getVehicleById(paramId).subscribe(resolve => {
      this.vehicle = resolve;
      console.log(this.vehicle);
    });
  }
}
