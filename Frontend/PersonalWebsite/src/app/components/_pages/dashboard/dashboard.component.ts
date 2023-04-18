import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ThemingService } from 'src/app/services/theming.service';
import { ClickMode, Container, Engine, HoverMode, MoveDirection, OutMode } from "tsparticles-engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  styles: [
    `
    //Handle Toggle Icons since a warning is thrown in css and since Angular doesnt support changing them
    $sun-path: 'm5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5Z';
    $moon-path: 'M21.64 13a1 1 0 0 0-1.05-.14a8.05 8.05 0 0 1-3.37.73a8.15 8.15 0 0 1-8.14-8.1a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69a1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14a9.79 9.79 0 0 0 2.1-.22a8.11 8.11 0 0 1-7.18 4.32Z';
    
    ::ng-deep .themeSwitch {
      transform: scale(1.3);
      .mdc-switch__ripple {
        display:none
      }
      .mdc-switch__icon {
        transform: scale(.8);
      
        // Toggle off
        &--off > path {
          d: path($sun-path);
        }
        
        // Toggle on
        &--on > path {
          d: path($moon-path);
        }
      }
    }
    `
  ]
})

export class DashboardComponent implements OnInit {
  width: number = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  height: number = (window.innerHeight > 0) ? window.innerHeight : screen.height;
  colorTheme: any;
  isDarkMode?: boolean;
  isDarkModeInit?: boolean;

  defaultImage = "/assets/_misc/Silhouette_icon.png";
  image = "/assets/_misc/Silhouette_small.png";

  constructor(private themeService: ThemingService, private router: Router) {
    this.themeService.initTheme();
  }

  @ViewChild('darkModeSwitch', { read: ElementRef }) element: ElementRef | undefined;

  ngOnInit(): void {
    this.isDarkModeInit = (this.themeService.getColorTheme() == "dark-mode") ? true : false;
  }

  toggleDarkMode() {
    this.isDarkModeInit = (this.themeService.getColorTheme() == "dark-mode") ? true : false;
    this.isDarkModeInit = (this.themeService.getColorTheme() == "light-mode") ? true : false;

    this.isDarkMode = this.themeService.isDarkMode();
    this.isDarkMode ? this.themeService.update('light-mode') : this.themeService.update('dark-mode');

    //Used for the Instant Refresh for Ng-Particle
    let reloadPath = this.router.url;
    if (reloadPath == "/") {
      this.router.navigateByUrl('/blank', { skipLocationChange: true, }).then(() => {
        setTimeout(() => {
          this.router.navigate([reloadPath]);
        }, 0);
      })
    } else {
      this.router.navigate([reloadPath]);
    }
  }

  id = "tsparticles";

  particlesOptions = {

      fpsLimit: 120,
      interactivity: {
          events: {
              onClick: {
                  enable: true,
                  mode: ClickMode.push,
              },
              onHover: {
                  enable: true,
                  mode: HoverMode.repulse,
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 200,
                  duration: 0.4,
              },
          },
      },
      particles: {
          color: {
              value: "#ffffff",
          },
          links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 1,
              width: 1,
          },
          collisions: {
              enable: true,
          },
          move: {
              direction: MoveDirection.none,
              enable: true,
              outModes: {
                  default: OutMode.bounce,
              },
              random: false,
              speed: 6,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 80,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 5 },
          },
      },
      detectRetina: true,
  };

  particlesLoaded(container: Container): void {
      console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
      console.log(engine);

      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }
}
