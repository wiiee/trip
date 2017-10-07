import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentTypePage } from './rent-type';

@NgModule({
  declarations: [
    RentTypePage,
  ],
  imports: [
    IonicPageModule.forChild(RentTypePage),
  ],
})
export class RentTypePageModule {}
