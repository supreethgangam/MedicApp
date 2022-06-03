import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { 
    if (!localStorage.getItem('user')) {
      this.router.navigate(['/login']);
  }
  }

  title = 'Medic App';
  
  onLogout(){
    console.log("yes");
    localStorage.setItem('user','');
    this.router.navigate(['/login']);
  }
}
