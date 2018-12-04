import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlatPAgeComponent } from '../flat/flat-page/flat-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FlatPAgeComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
