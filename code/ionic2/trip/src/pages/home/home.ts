import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BuildingListPage } from '../building-list/building-list';
import { RentTypePage } from '../rent-type/rent-type';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  buildingList() {
    this.navCtrl.push(BuildingListPage);
  }

  rent() {
    this.navCtrl.push(RentTypePage);
  }
}
