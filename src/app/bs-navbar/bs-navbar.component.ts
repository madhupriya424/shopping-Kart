import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent{

  // user$: Observable<firebase.User>;

  constructor(public auth: AuthService) { 
   // this.afAuth.authState.subscribe(x => this.user=x);
   
    
  }
  //async pipe will aotomatically unscribe the observable when the component is distroy.

//authState is a observable which represents authentication state of current user.
// function(x) {
//   console.log(x);
// }
//if we are using firebase we have to always unscribe the data because firebase deal with asynchronous stream of data but it is not needed in Angular.
// 1. implements OnDestroy interface
// 2. async pipe(which is simple and clener).

logOut(){
    this.auth.logOut();
  }

}
