import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { FaIconModule } from '../../components/fa-icon/fa-icon.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    FaIconModule
  ],
})
export class HomePageModule {}
