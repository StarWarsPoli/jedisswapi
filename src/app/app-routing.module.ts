import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'list/:id', loadChildren: './modules/list/list.module#ListModule' },
  {
    path: 'detail/:id',
    loadChildren: './modules/detail/detail.module#DetailModule'
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
