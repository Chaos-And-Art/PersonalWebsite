import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemingService } from 'src/app/services/theming.service';
import { Container, Engine, } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { ParticleConfiguration } from 'src/app/utils/particleConfiguration';
// import { PopupsComponent } from '../../popups/popups.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  width: number = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  height: number = (window.innerHeight > 0) ? window.innerHeight : screen.height;
  darkmode: boolean = false;
  particlesOptions: any;

  constructor(private themeService: ThemingService, public dialog: MatDialog) {
    this.themeService.initTheme();
  }

  ngOnInit(): void {
    const particleConfig = new ParticleConfiguration(this.themeService);
    this.particlesOptions = particleConfig.particleOptionsArrayHome[0];
  }

  onExploreButton() {
    window.scrollTo({ left: 0, top: this.height / 1.1, behavior: 'smooth' })
  }

  openChaosDialog() {
    // this.dialog.open(PopupsComponent, {
    //   data: {
    //     type: 'chaos',
    //   },
    //   position: {
    //     top: '200px',
    //   },
    // });
  }

  particlesLoaded(container: Container): void {
    // console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }

}