import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User, UserRole } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {   
  userData = new User();    

  constructor(private router: Router, private authService: AuthService) {    
    this.authService.userData.asObservable().subscribe(data => {    
      this.userData = data;    
    });    
  }    
  
  canActivate(    
    next: ActivatedRouteSnapshot,    
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {    
    
    if (this.userData.role == UserRole.User) {    
      return true;    
    }     
    
    this.router.navigate(['/Login']);   
     
    return false;    
  }    
  
}
