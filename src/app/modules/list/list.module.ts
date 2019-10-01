import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ListRoutingModule } from './list-routing.module'
import { ListComponent } from './list.component';
import { ItemListComponent } from './components/item-list/item-list.component'
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [ListComponent, ItemListComponent],
  imports: [CommonModule, ListRoutingModule, RouterModule]
})
export class ListModule {}
