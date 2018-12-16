import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login-page/login-service/login.service';
// import { InfoCompanyTabComponent } from '../info-company-tab/info-company-tab.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentUser;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');
  }

  exit() {
    this.loginService.deleteToken();
  }

}
