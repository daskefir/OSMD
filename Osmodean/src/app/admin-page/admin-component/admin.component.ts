import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login-page/login-service/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  exit() {
    this.loginService.deleteToken();
  }

}
