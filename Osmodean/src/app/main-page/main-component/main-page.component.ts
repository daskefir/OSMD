import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { LoginComponent } from '../../login-page/login-component/login.component';
import { MainService } from '../main-service/main.service';
import { Company } from '../../models/company';
import { LoginService } from '../../login-page/login-service/login.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  company: Company;

  userfulInfo = [
    { iconName: 'email', text: 'Надати показники лічильників' },
    { iconName: 'money', text: 'Тарифи для дому' },
    { iconName: 'account_balance', text: 'Банківські реквізити' },
    { iconName: 'forum', text: 'Побажання та пропозиції' }
  ];

  allNews = [
    { newsTitle: 'Про воду', newsText: 'Філія "Інфокводоканал" з 08.11.2018 року підвищує вартість води до 21,95 грн/м.куб.' },
    {
      newsTitle: 'Вакансія бухгалтера', newsText: `Запрошуємо на роботу бухгалтера,
                розмір заробітної плати визначиться за результатами співбесіди`}
  ];

  constructor(public dialog: MatDialog,
    private mainService: MainService,
    private loginService: LoginService,
    private router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.mainService.getCompanyInfo()
      .subscribe((data: Company) => {
        this.company = data;
      });
  }

  openLogin(): void {
    if (this.loginService.isLoggedIn) {
      this.router.navigate(['/admin']);
    } else {
      const dialogRef = this.dialog.open(LoginComponent, {
        height: '400px',
        width: '400px'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        this.openSnackBar();
      });
    }
  }

  openSnackBar() {
    if (this.loginService.isLoggedIn) {
      this.snackBar.open('Вхід в ситстему виконано', 'Закрити', {
        duration: 3000
      });
    } else {
      this.snackBar.open('Невірний логін або пароль', 'Закрити', {
        duration: 3000
      });
    }
  }
}
