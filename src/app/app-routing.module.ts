import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'list/:id', loadChildren: './modules/list/list.module#ListModule' },
  {
    path: 'movies/:id',
    loadChildren: './modules/films/films.module#FilmsModule'
  },
  {
    path: 'people/:id',
    loadChildren: './modules/people/people.module#PeopleModule'
  },
  {
    path: 'planets/:id',
    loadChildren: './modules/planets/planets.module#PlanetsModule'
  },
  {
    path: 'species/:id',
    loadChildren: './modules/species/species.module#SpeciesModule'
  },
  {
    path: 'vehicles/:id',
    loadChildren: './modules/vehicles/vehicles.module#VehiclesModule'
  },
  {
    path: 'starships/:id',
    loadChildren: './modules/starships/starships.module#StarshipsModule'
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
