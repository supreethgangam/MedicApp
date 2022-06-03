import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { CreateHospitalComponent } from './create-hospital/create-hospital.component';
import { UpdateHospitalComponent } from './update-hospital/update-hospital.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DocListComponent,
    HospitalListComponent,
    CreateHospitalComponent,
    UpdateHospitalComponent,
    HospitalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
