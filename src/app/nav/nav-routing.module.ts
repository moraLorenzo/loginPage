import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { NavComponent } from './nav.component';

const routes: Routes = [
  {path: '', redirectTo: '/home/:id', pathMatch: 'full'},
  {path: 'home/:id', component: HomeComponent, data: {some_data: 'some value'}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
