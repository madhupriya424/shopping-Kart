import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  name:string;
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSignUp(){
   let data = {email:this.email, password: this.password, name: this.name, isAdmin: false};
   this.auth.signup(data).subscribe((res)=>{
    console.log(res);
   });
  }
}
