import { Hospital } from '../user';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent implements OnInit {

  _id: string;
  user: Hospital;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.user = new Hospital();

    this._id = this.route.snapshot.params['_id'];
    console.log("gh"+this._id);
    this.userService.getHospital(this._id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['hospitals']);
  }

}
