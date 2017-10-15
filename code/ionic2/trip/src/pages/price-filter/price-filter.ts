import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events } from 'ionic-angular';

import { PriceRange } from '../../entity/price-range';

/**
 * Generated class for the PriceFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-price-filter',
  templateUrl: 'price-filter.html',
})
export class PriceFilterPage {
  items: PriceRange[];
  currentIndex: number;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public events: Events) {
    this.items = [];
    
    this.items.push(new PriceRange(0, 9999999, "不限"));
    this.items.push(new PriceRange(0, 500, "500元以下"));
    this.items.push(new PriceRange(500, 1000, "500-1000元"));
    this.items.push(new PriceRange(1000, 2000, "1000-2000元"));
    this.items.push(new PriceRange(2000, 3000, "2000-3000元"));
    this.items.push(new PriceRange(3000, 5000, "3000-5000元"));
    this.items.push(new PriceRange(5000, 8000, "5000-8000元"));
    this.items.push(new PriceRange(8000, 9999999, "8000元以上"));

    this.currentIndex = this.navParams.data.filter.data.currentIndex;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PriceFilterPage');
  }

  itemSelected(i: number) {
    this.currentIndex = i;
    this.navParams.data.filter.data.currentIndex = i;
    this.events.publish('buildingList:filter', this.navParams.data.filter);
    this.viewCtrl.dismiss();
  }
}
