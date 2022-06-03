import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Hospital } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-hospital',
  templateUrl: './create-hospital.component.html',
  styleUrls: ['./create-hospital.component.css']
})
export class CreateHospitalComponent implements OnInit {

  hospital: Hospital = new Hospital();
  submitted = false;

  constructor(private userService: UserService,
    private router: Router) { 
      if (!localStorage.getItem('user')) {
        this.router.navigate(['/login']);
    }
    }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.hospital = new Hospital();
  }

  save() {
    this.userService
    .createHospital(this.hospital).subscribe(data => {
      console.log(data)
      this.hospital = new Hospital();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/hospitals']);
  }

}
