import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { RegisterViewComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';



const routes: Routes = [
{path: 'Home', component: HomeComponent },
{ path: 'Register', component: RegisterViewComponent },
{ path: '**', redirectTo: 'Home' },];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, RegisterViewComponent];