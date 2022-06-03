import { UserService } from '../user.service';
import { User } from '../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { 
      if (!localStorage.getItem('user')) {
        this.router.navigate(['/login']);
    }
    }

  ngOnInit(): void {
  }

  onDoc() {
    this.router.navigate(['/docs']);
  }

  onHospital() {
    this.router.navigate(['/hospitals']);
  }

  onUser() {
    this.router.navigate(['/users']);
  }

}
