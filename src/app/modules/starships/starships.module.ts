import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './starships.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StarshipsComponent],
  imports: [CommonModule, StarshipsRoutingModule, RouterModule, SharedModule]
})
export class StarshipsModule {}
