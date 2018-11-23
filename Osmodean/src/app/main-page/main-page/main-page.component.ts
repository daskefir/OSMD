import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'src="assets/logo.jpg" alt="Logo"', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'ОСМД "Новострой-2018"', cols: 5, rows: 1, color: 'lightgreen'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
