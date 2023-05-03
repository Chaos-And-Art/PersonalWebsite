import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/_pages/home/home.component';
import { DashboardComponent } from './components/_pages/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { DialogPopupsComponent } from './components/dialogPopups/dialogPopups.component';
import { LoginComponent } from './components/_pages/login/login.component';

//External Modules
import { NgParticlesModule } from "ng-particles";
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule,HTTP_INTERCEPTORS } from '@angular/common/http';

//Custom Services
import { UserService } from './services/user.service';
import { UrlService } from './services/url.service';
import { Utilities } from './utilities/utilities';
import { InterceptorService } from './services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    DialogPopupsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    LazyLoadImageModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [
    UserService,
    UrlService,
    Utilities,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
