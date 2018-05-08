import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import {LoginService} from '../app/services/login.service';
import {AuthService} from '../app/services/auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { DasboardComponent } from './dasboard/dasboard.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DasboardComponent
  ],
  imports: [
    BrowserModule ,
    routing,
    HttpModule
  ],
  providers: [LoginService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
