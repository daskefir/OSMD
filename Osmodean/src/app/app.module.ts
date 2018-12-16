import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainPageModule } from './main-page/main-page.module';
import { LoginModule } from './login-page/login.module';
import { NewsComponent } from './flat/news/news.component';
import { FLATModule} from './flat/flat.module';
import { AdminModule } from './admin-page/admin.module';
import { FlatPageComponent } from './flat/flat-page.component';

const appRoutes: Routes = [
  {path: 'flat', component: FlatPageComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MainPageModule,
    LoginModule,
    HttpClientModule,
    FLATModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
