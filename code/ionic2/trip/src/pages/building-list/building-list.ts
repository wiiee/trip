import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BasePage } from '../shared/base';

import { BuildingDetailPage } from '../building-detail/building-detail';

import { BuildingItem } from '../../entity/building-item';
import { Img } from '../../entity/img';

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
  items: BuildingItem[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super(navCtrl);
    
    this.items = [];

    for (var i = 0; i < 10; i++) {
      let imgs: Img[] = [];
      imgs.push(new Img("assets/images/slide" + (i % 4 + 1) + ".jpg"));
      this.items.push(new BuildingItem(i.toString(), imgs));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingListPage');
  }

  goDetail(){
    this.navCtrl.push(BuildingDetailPage);
  }

}
