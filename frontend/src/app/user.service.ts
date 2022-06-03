import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8000/api/v1/users';


  constructor(private http: HttpClient) { }

  getUser(_id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${_id}`);
  }

  getHospital(_id: string): Observable<any> {
    return this.http.get(`http://localhost:8000/api/v1/hospitals/${_id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  createHospital(user: Object): Observable<Object>{
    return this.http.post(`http://localhost:8000/api/v1/addhospital`, user);
  }

  updateUser(_id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${_id}`, value);
  }

  updateHospital(_id: string, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8000/api/v1/hospitals/${_id}`, value);
  }

  deleteUser(_id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${_id}`, { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getDocsList(): Observable<any> {
    return this.http.get(`http://localhost:8000/api/v1/docs`);
  }

  getHospitalsList(): Observable<any> {
    return this.http.get(`http://localhost:8000/api/v1/hospitals`);
  }


  login(email:string, password:string): Observable<Object> {
    const details = {emailId: email, password: password}
    console.log(details);
    return this.http.post(`http://localhost:8000/api/v1/users/login`, details);
  
      // .pipe(map(user => {
        //     // store user details and jwt token in local storage to keep user logged in between page refreshes
        //     localStorage.setItem('user', JSON.stringify(user));
        //     this.userSubject.next(user);
        //     return user;
        // }));
  }

// logout() {
//     // remove user from local storage and set current user to null
//     localStorage.removeItem('user');
//     this.userSubject.next(null);
//     this.router.navigate(['/account/login']);
// }
}