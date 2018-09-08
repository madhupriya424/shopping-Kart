import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Route } from '../../node_modules/@angular/compiler/src/core';
import { Router } from '../../node_modules/@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: AuthService, router: Router){
    
      if(this.auth.user){
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    
  }
}
