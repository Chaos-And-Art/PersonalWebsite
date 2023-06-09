import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/_pages/dashboard/dashboard.component';
import { BlankComponent } from './components/_pages/blank/blank.component';
import { HomeComponent } from './components/_pages/home/home.component';
import { LoginComponent } from './components/_pages/login/login.component';
import { ObsidianDashboardComponent } from './components/_obsidian/obsidian-dashboard/obsidian-dashboard.component';

const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Obsidian/Dashboard', component: ObsidianDashboardComponent },
  // { path: 'Chaos', component: ChaosComponent },
  // { path: 'Art', component: ArtComponent },
  // { path: 'Apps', component: AppsComponent },
  // { path: 'Music', component: MusicComponent },
  // { path: 'Contact', component: ContactComponent },
  // { path: 'Business-Information', component: BusinessInfoComponent },
  // { path: 'Privacy-Policy', component: PrivacyPolicyComponent },
  // { path: 'Terms-And-Conditions', component: TermsConditionsComponent },
  { path: 'blank', component: BlankComponent }

  //Chaos Projects
  // { path: 'Chaos/Fireworks', component: FireworksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
