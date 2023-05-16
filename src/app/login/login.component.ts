import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorMsg: string;

  constructor(private auth: AuthService, private router: Router) {
    this.username = '';
    this.password = '';
    this.errorMsg = '';
  }

  ngOnInit(): void {}

  login(): void {
    if (this.username.trim().length === 0) {
      this.errorMsg = 'Username is required';
    } else if (this.password.trim().length === 0) {
      this.errorMsg = 'Password is required';
    } else {
      this.errorMsg = '';
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['home']);
      } else if (res === 403) {
        this.errorMsg = 'Invalid Credentials';
      }
    }
  }
}
