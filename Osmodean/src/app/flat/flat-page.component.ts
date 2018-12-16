import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-flat-page',
  templateUrl: './flat-page.component.html',
  styleUrls: ['./flat-page.component.css']
})
export class FlatPageComponent implements OnInit {
 userName = 'Flat Owner';

  constructor() { }
  ngOnInit() {}

}
