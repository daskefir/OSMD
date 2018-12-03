import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../login/login/login.component';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  companyName = 'ОСМД "Новострой-2018"';
  companyLogo = 'assets/logo.png';

  contacts = [
    {person: 'Голова ОСМД', number: '097 123 45 67'},
    {person: 'Бухгалтер', number: '068 456 45 67'},
    {person: 'Електрик', number: '063 589 68 67'},
    {person: 'Сантехнік', number: '096 864 31 11'},
    {person: 'Охорона', number: '048 765 65 65'},
    {person: 'Диспетчер ліфту', number: '063 321 21 12'}
  ];

  userfulInfo = [
    {iconName: 'email', text: 'Відправити показники лічильників'},
    {iconName: 'monetization_on', text: 'Тарифи для дому'},
    {iconName: 'message', text: 'Питання-відповідь'}
  ];

  allNews = [
    {newsTitle: 'Про воду', newsText: 'Філія "Інфокводоканал" з 08.11.2018 року підвищує вартість води до 21,95 грн/м.куб.'},
    {newsTitle: 'Вакансія бухгалтера', newsText: `Запрошуємо на роботу бухгалтера,
                розмір заробітної плати визначиться за результатами співбесіди`}
  ];

  constructor(public dialog: MatDialog) {}

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
  }

}
