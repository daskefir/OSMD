import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatPageComponent } from './flat-page.component';
import { MaterialModule } from '../material/material.module';
import { ElectricityComponent } from './electricity/electricity.component';
import { WaterComponent } from './water/water.component';
import { GarbageComponent } from './garbage/garbage.component';
import { WarmingComponent } from './warming/warming.component';
import { ElevatorComponent } from './elevator/elevator.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FlatPageRoutingModule} from './flat-page-routing.module';

@NgModule({
  declarations: [FlatPageComponent,
    ElectricityComponent,
    WaterComponent,
    GarbageComponent,
    WarmingComponent,
    ElevatorComponent,
    UserInfoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlatPageRoutingModule
  ]
})
export class FLATModule { }
