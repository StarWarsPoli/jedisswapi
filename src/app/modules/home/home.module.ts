import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component';
import { ContainerComponent } from './components/container/container.component';
import { SliderComponent } from './components/slider/slider.component'

@NgModule({
  declarations: [HomeComponent, ContainerComponent, SliderComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
