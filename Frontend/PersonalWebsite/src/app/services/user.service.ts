import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { FormGroup } from '@angular/forms';
// import { UserSubscribed } from '../models/userSubscribed';

@Injectable({ providedIn: 'root' })
export class UserService {
  userDomain: string = "http://192.168.86.30:45455/api/User/" //Will need to store this somewhere securely
  userSubsDomain: string = "http://192.168.86.30:45455/api/UserSubs/" //Will need to store this somewhere securely

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<User> {
    var httpOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }),
      params: new HttpParams().set('email', email)
    };
    return this.http.get<User>(this.userDomain + "GetUserByEmail", httpOptions);
  }

  getLoggedInUser(getRoles: boolean): Observable<User> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      }),
      params: new HttpParams().set('getRoles', getRoles)
    };
    return this.http.get<User>(this.userDomain + "GetLoggedInUser", httpOptions);
  }

  // subscribeUser(subscribeForm: FormGroup) {
  //   var httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     })
  //   };

  //   var user = new UserSubscribed()
  //   user.name = subscribeForm.get('name')?.value;
  //   user.email = subscribeForm.get('email')?.value;

  //   return this.http.post<string>(this.userSubsDomain + "CreateSubscribedUser", user, httpOptions);
  // }
}