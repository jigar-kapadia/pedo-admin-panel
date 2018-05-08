import { Component, OnInit } from '@angular/core';
import {Login} from '../models/login.model';
import {LoginService} from '../services/login.service';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login;
  error : string;
  constructor(private router: Router,private loginService: AuthService) { }

  ngOnInit() {
    this.model = new Login();
    this.loginService.logout();
  }

  Aunthenticate(){//(loginModel : Login) : void{
    this.router.navigate(["/dashboard"]);
  //   this.loginService.login(loginModel)
  //   .subscribe(result => {
  //     if (result === true) {
  //         //this.error = 'Success';
  //         this.router.navigate(["/dashboard"]);
  //     } else {
  //         this.error = 'Username or password is incorrect';
  //         //this.loading = false;
  //     }
  // });
  }

}
