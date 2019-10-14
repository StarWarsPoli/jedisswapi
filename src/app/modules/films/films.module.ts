import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FilmsComponent],
  imports: [CommonModule, FilmsRoutingModule, RouterModule, SharedModule]
})
export class FilmsModule {}
