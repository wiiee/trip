import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PriceRange } from '../../entity/price-range';

@Component({
  selector: 'page-from-filter',
  templateUrl: 'from-filter.html'
})
export class FromFilterPage {
  items: string[];

  constructor(public navCtrl: NavController) {
    this.items = [];

    this.items.push("不限");
    this.items.push("个人");
    this.items.push("品牌公寓");
  }
}