import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { SigninComponent } from './components/signin.component';
import { SignupComponent } from './components/signup.component';
//import { HeroesComponent } from './heroes.component';
//import { HeroDetailComponent } from './hero-detail.component';
const routes: Routes = [
    { path: '',redirectTo: '/home', pathMatch: 'full'  },
    { path: 'home',  component: HomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup',     component: SignupComponent }
  ];
   
@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
