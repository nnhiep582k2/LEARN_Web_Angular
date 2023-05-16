import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(uname: string, upassword: string): number {
    if (uname === 'nnhiep' && upassword === '123') {
      return 200;
    }
    return 403;
  }

  logout(): void {
    this.router.navigate(['login']);
  }
}
