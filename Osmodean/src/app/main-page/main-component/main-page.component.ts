import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../login/login-component/login.component';
import { MainService } from '../main-service/main.service';
import { Company } from '../../models/company';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  company: Company;

  userfulInfo = [
    { iconName: 'email', text: 'Відправити показники лічильників' },
    { iconName: 'monetization_on', text: 'Тарифи для дому' },
    { iconName: 'message', text: 'Питання-відповідь' }
  ];

  allNews = [
    { newsTitle: 'Про воду', newsText: 'Філія "Інфокводоканал" з 08.11.2018 року підвищує вартість води до 21,95 грн/м.куб.' },
    {
      newsTitle: 'Вакансія бухгалтера', newsText: `Запрошуємо на роботу бухгалтера,
                розмір заробітної плати визначиться за результатами співбесіди`}
  ];

  constructor(public dialog: MatDialog, private mainService: MainService) { }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '400px',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.mainService.getCompanyInfo()
      .subscribe((data: Company) => {
        this.company = data;
      });
  }

}
