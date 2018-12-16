import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin-component/admin.component';
import { InfoCompanyTabComponent } from './info-company-tab/info-company-tab.component';

@NgModule({
  declarations: [AdminComponent, InfoCompanyTabComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
