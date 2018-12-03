import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
