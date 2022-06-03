import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { User } from "../user";
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  submitted = false;

  constructor(private userService: UserService,
    private router: Router) {
        // redirect to home if already logged in
        if (localStorage.getItem('user')) {
            this.router.navigate(['/dashboard']);
        }
    }

  ngOnInit(){
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  login(email: string, password: string) {
    this.userService.login(email,password)
      .subscribe(
      data => {
        // console.log(email);
        localStorage.setItem('user', email);
        // if (typeof email === 'undefined')
        // {
        //   this.router.navigate(['/login']);
        // }
        // else
        // {
          this.gotoList();
        // }
      },
      error => {
        console.log(error);
        this.router.navigate(['/login']);
      });
  }

  onSubmitLogin() {
    this.submitted = true;
    this.login(this.user.emailId,this.user.password);    
  }

  onSignup() {
    this.router.navigate(['/reg']);
  }

  gotoList() {
    this.router.navigate(['/dashboard']);
  }
}
