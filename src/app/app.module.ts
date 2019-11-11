import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import {MatTableModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { USerServiceService } from './services/user-service.service';
import {ResetService} from './services/reset.service';



@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    BeerListComponent,
    LoginComponent,
   RoutingComponents,
   RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [USerServiceService, ResetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
