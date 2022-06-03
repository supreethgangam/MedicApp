import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { CreateHospitalComponent } from './create-hospital/create-hospital.component';
import { UpdateHospitalComponent } from './update-hospital/update-hospital.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UserListComponent },
  { path: 'docs', component: DocListComponent },
  { path: 'hospitals', component: HospitalListComponent },
  { path: 'add', component: CreateUserComponent },
  { path: 'addhospital', component: CreateHospitalComponent },
  { path: 'update/:_id', component: UpdateUserComponent },
  { path: 'updatehospital/:_id', component: UpdateHospitalComponent },
  { path: 'details/:_id', component: UserDetailsComponent },
  { path: 'hospitaldetails/:_id', component: HospitalDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }