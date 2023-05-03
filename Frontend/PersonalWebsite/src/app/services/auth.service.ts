import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { AuthToken } from '../models/authToken';
import { applicationStorageService } from './applicationStorage.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserLogin } from '../models/userLogin';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
    authDomain: string = "http://192.168.86.30:45455/api/Authenticate/" //These will need to be hidden
    authToken?: AuthToken

    public userData: BehaviorSubject<User> = new BehaviorSubject<User>(new User());

    constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

    login(loginForm: FormGroup): Observable<AuthToken> {
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        var user = new UserLogin()
        user.email = loginForm.get('email')?.value;
        user.password = loginForm.get('password')?.value;

        return this.http.post<AuthToken>(this.authDomain + "login", user, httpOptions);
    }

    setUserDetails() {
        const userDetails = new User();
        this.userService.getLoggedInUser(true).subscribe(result => {
            userDetails.firstName = result.firstName;
            userDetails.lastName = result.lastName;
            userDetails.isLoggedIn = true;
            userDetails.role = result.role;

            this.userData.next(userDetails);
        }, (error) => {
            // console.log(error + " Access Token has expired")
            this.userData.next(new User());
        });
    }

    logout() {
        applicationStorageService.removeValueFromStorage("DetourAccessToken");
        applicationStorageService.removeValueFromStorage("DetourRefreshToken");
        applicationStorageService.removeValueFromStorage("DetourAccessTokenExpiration");
        this.userData.next(new User());
        window.location.href = this.router.url;
    }

    refreshToken(): Observable<AuthToken> {
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        this.authToken = {
            accessToken: applicationStorageService.getValueFromStorage("DetourAccessToken"),
            refreshToken: applicationStorageService.getValueFromStorage("DetourRefreshToken"),
            expiration: new Date
        }

        return this.http.post<AuthToken>(this.authDomain + "refresh-token", this.authToken, httpOptions);
    }
}