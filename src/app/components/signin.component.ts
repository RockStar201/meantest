import { Component } from '@angular/core';
import { Login } from '../customModels';
@Component({
  selector: 'sign-in',
  templateUrl: '../views/signin.component.html',
  styleUrls: ['../css/signin.component.css']
})
export class SigninComponent {
  title = 'SignIn';
  Login=Login;
  bgImg="/assets/Images/Site/login-bg.png";
  onSubmit():void{

  }
}
