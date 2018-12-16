import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
// import { ElectricityComponent } from './flat/electricity/electricity.component';
// import { WaterComponent } from './flat/water/water.component';
// import { GarbageComponent } from './flat/garbage/garbage.component';
// import { WarmingComponent } from './flat/warming/warming.component';
// import { ElevatorComponent } from './flat/elevator/elevator.component';
// import { UserInfoComponent } from './flat/user-info/user-info.component';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './flat/news/news.component';
import { FLATModule} from './flat/flat.module';

const appRoutes: Routes = [
  { path: '', redirectTo: 'flat', pathMatch: 'full'},
  // { path: 'userinfo', component: UserInfoComponent},
  // { path: 'userPay', component: FlatPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,

    // ElectricityComponent,
    // WaterComponent,
    // GarbageComponent,
    // WarmingComponent,
    // ElevatorComponent,
    // UserInfoComponent,
    NewsComponent

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserModule, RouterModule.forRoot(appRoutes),
    FLATModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
