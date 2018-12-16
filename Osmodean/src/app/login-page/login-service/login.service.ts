import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReqObj } from '../../models/request-obj';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: Boolean = false;
  currenUser: string;

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(login, password) {
    this.httpClient.post<ReqObj>('http://localhost:3000/login', { login, password })
      .subscribe(data => {
        data = data;
        if (data.user && data.token) {
          const user = data.user;
          this.currenUser = user;
          this.saveToken(data.token);
          localStorage.setItem('currentUser', user);
          this.isLoggedIn = true;
          this.router.navigate(['/admin']);
        }
      });
  }

  saveToken(token: string) {
    window.localStorage['jwtToken'] = token;
  }

  deleteToken() {
    window.localStorage.removeItem('jwtToken');
    this.isLoggedIn = false;
    this.router.navigate(['/main']);
    console.log('deleteToken work!!!');
  }
}
