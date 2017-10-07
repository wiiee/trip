import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearFilterPage } from './near-filter';

@NgModule({
  declarations: [
    NearFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(NearFilterPage),
  ],
})
export class NearFilterPageModule {}
