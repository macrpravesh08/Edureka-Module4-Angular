import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  username: String;
  passwrod: String;

  login() : void {

    if(this.username == 'admin' && this.passwrod == 'admin'){

      this.router.navigate(['/home']);
     //this.router.navigateByUrl("/login");

    }else {

      alert("Invalid credentials");

    }

  }
 
}
