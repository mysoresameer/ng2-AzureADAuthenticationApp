import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  NavigationExtras, Route
}                           from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {AzureADAuthService} from './ngAuth/authenticators/AzureADAuthService'


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private http:Http, private authService:AzureADAuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
     return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.authService.isUserAuthenticated()) 
    { 
      return true; 
    }
    else{
        this.router.navigate(['/login']);
        return false;
    }
  }
}