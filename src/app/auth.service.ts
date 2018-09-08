import { Injectable } from '@angular/core';
import { AngularFireAuth } from '../../node_modules/angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { longStackSupport } from '../../node_modules/@types/q';
import * as firebase from 'firebase';
import { Observable } from '../../node_modules/rxjs';
import { ActivatedRoute } from '../../node_modules/@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private http: HttpClient) {

  
  }


  login(body) {
    // let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    // localStorage.setItem('returnUrl', returnUrl);
    // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    return this.http.post("http://localhost:6002/login", body);
  }

  logOut() {
    this.user=null;
  }

  signup(body){
    return this.http.post("http://localhost:6002/signup", body);
  }
}