import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BasePage } from '../shared/base';

import { BuildingDetailPage } from '../building-detail/building-detail';

/**
 * Generated class for the BuildingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-building-list',
  templateUrl: 'building-list.html',
})
export class BuildingListPage extends BasePage {
  items: number[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super(navCtrl);
    
    this.items = [];

    for (var i = 0; i < 10; i++) {
      this.items.push(i);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingListPage');
  }

  goDetail(){
    this.navCtrl.push(BuildingDetailPage);
  }

}
