import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { SigninComponent } from './components/signin.component';
import { SignupComponent } from './components/signup.component';

import { AppRoutingModule } from './app.routing.module';
@NgModule({
  declarations: [
    AppComponent, HomeComponent, SigninComponent, SignupComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
