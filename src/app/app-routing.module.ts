import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinlistComponent} from './pinlist/pinlist.component';
import { SearchComponent } from './search/search.component';
import {AddpinComponent}from './addpin/addpin.component';
const routes: Routes = [
  {path:'', component: PinlistComponent},
  {path:'newpins', component: PinlistComponent},
  {path:'search', component: SearchComponent},
  {path:'addpin', component: AddpinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
