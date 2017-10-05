import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PriceRange } from '../../entity/price-range';

@Component({
  selector: 'page-from-filter',
  templateUrl: 'from-filter.html'
})
export class FromFilterPage {
  items: string[];
  current: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];

    this.items.push("不限");
    this.items.push("个人");
    this.items.push("品牌公寓");

    this.current = this.items[0];
  }

  itemSelected(item: string) {
    this.current = item;
  }
}