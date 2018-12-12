import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private router: Router) { }

  canActivate(): boolean {
    if (window.localStorage['jwtToken']) {
        return true;
    } else {
        this.router.navigate(['/main']);
        return false;
    }
}
}
