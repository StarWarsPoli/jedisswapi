import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { CharacterComponent } from './components/detail/character/character.component';
import { FilmComponent } from './components/detail/film/film.component';

@NgModule({
  declarations: [FooterComponent, NavBarComponent, DetailComponent, CharacterComponent, FilmComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, NavBarComponent, DetailComponent]
})
export class SharedModule {}
