import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BuildingListPage } from '../building-list/building-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  buildingList(){
    this.navCtrl.push(BuildingListPage);
  }
}
