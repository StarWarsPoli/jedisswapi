import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component';
import { ContainerComponent } from './components/container/container.component'

@NgModule({
  declarations: [HomeComponent, ContainerComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
