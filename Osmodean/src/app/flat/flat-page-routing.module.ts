import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlatPageComponent } from './flat-page.component';

const routes: Routes = [
    { path: 'flat', component: FlatPageComponent },
];


@NgModule({
    declarations: [

    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: [],
    bootstrap: []
  })
  export class FlatPageRoutingModule { }
