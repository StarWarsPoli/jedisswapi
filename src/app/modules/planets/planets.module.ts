import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PlanetsComponent],
  imports: [CommonModule, PlanetsRoutingModule, RouterModule, SharedModule]
})
export class PlanetsModule {}
