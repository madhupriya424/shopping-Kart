import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, RouterStateSnapshot } from '../../node_modules/@angular/router';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot){
      
    if(this.auth.user) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url}});
    return false;
  }
}