import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { applicationStorageService } from 'src/app/services/applicationStorage.service';
import { AuthService } from 'src/app/services/auth.service';
import { UrlService } from 'src/app/services/url.service';
import { Utilities } from 'src/app/utilities/utilities';
import { PopupsComponent } from '../../popups/popups.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  showPassword: boolean = false;
  inputType: string = "password"

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog, private authService: AuthService, private urlService: UrlService, private utilities: Utilities) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

  }

  get form(): { [key: string]: AbstractControl; } {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    /*
      If someone is trying to access a page and not authorized, 
      they will be redirected to Login Page, and this will force 
      log out whoever was logged in 
    */
    if (applicationStorageService.getValueFromStorage("DetourAccessToken") != "") {
      this.authService.logout();
    }
  }

  onLoginSubmit() {
    this.submissionTimer();
    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.login(this.loginForm).subscribe(result => {
        applicationStorageService.addValueToStorage("DetourAccessToken", result.accessToken);
        applicationStorageService.addValueToStorage("DetourRefreshToken", result.refreshToken);
        applicationStorageService.addValueToStorage("DetourAccessTokenExpiration", result.expiration.toString());
        this.loading = false;

        this.dialog.open(PopupsComponent, {
          data: {
            type: 'loginSuccessful',
          },
          position: {
            top: '200px',
          },
        });
        this.loading = false;
        this.navigateToPreviousPage()
      }, (error) => {
        console.log(error)
        this.utilities.filterErrors("loginFailed_", error);
        this.loading = false;
      });
    }
  };

  submissionTimer() {
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
    }, 5000);
  }

  navigateToPreviousPage() {
    setTimeout(() => {
      this.urlService.previousUrl.asObservable().subscribe(url => {
        window.location.href = url;
      });
    }, 1000);
  }

  toggleFieldTextType() {
    this.showPassword = !this.showPassword;
    !this.showPassword ? this.inputType = "password" : this.inputType = "text";
  }
}
