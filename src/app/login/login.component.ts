import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase';
import { AuthService } from '../auth.service';
//with this firebase we can define all function and objects define in this firebase library.

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   constructor(private auth: AuthService) {
    }


  login(){       //AngularFire is a abstraction over the firebase library.AngularFire has very few or limited support of authenication. so we directly use firebase here.
   this.auth.login();
  }

 
}
