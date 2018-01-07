import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events } from 'ionic-angular';

import { BaseFilter } from '../base-filter';

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
export class PriceFilterPage extends BaseFilter {
  constructor(public viewCtrl: ViewController, navParams: NavParams, events: Events) {
    super(navParams.data.filter, events);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PriceFilterPage');
  }

  itemSelected(i: number) {
    this.filter.data.currentIndex = i;
    this.publish();
    this.viewCtrl.dismiss();
  }
}
