import { Component, OnInit } from '@angular/core';
import { Hospital } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-update-hospital',
  templateUrl: './update-hospital.component.html',
  styleUrls: ['./update-hospital.component.css']
})
export class UpdateHospitalComponent implements OnInit {

  _id: string;
  hospital: Hospital;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.hospital = new Hospital();

    this._id = this.route.snapshot.params['_id'];
    
    this.userService.getHospital(this._id)
      .subscribe(data => {
        this.hospital = data;
      }, error => console.log(error));
  }

  updateHosp() {
    this.userService.updateHospital(this._id, this.hospital)
      .subscribe(data => {
        console.log(data);
        this.hospital = new Hospital();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateHosp();    
  }

  gotoList() {
    this.router.navigate(['/hospitals']);
  }
}
