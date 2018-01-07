import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoreFilterPage } from './more-filter';

@NgModule({
  declarations: [
    MoreFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(MoreFilterPage),
  ],
})
export class MoreFilterPageModule {}
