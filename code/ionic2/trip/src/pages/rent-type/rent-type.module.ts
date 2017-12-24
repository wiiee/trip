import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentTypePage } from './rent-type';

import { FaIconComponent } from "../../components/fa-icon/fa-icon.component";

@NgModule({
  declarations: [
    RentTypePage,
    FaIconComponent
  ],
  imports: [
    IonicPageModule.forChild(RentTypePage),
  ],
})
export class RentTypePageModule {}
