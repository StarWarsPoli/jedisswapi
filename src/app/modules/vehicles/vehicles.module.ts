import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [VehiclesComponent],
  imports: [CommonModule, VehiclesRoutingModule, RouterModule, SharedModule]
})
export class VehiclesModule {}
