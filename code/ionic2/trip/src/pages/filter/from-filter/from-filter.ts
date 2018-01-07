import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events } from 'ionic-angular';

import { BaseFilter } from '../base-filter';

/**
 * Generated class for the FromFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-from-filter',
  templateUrl: 'from-filter.html',
})
export class FromFilterPage extends BaseFilter {
  constructor(public viewCtrl: ViewController, navParams: NavParams, events: Events) {
    super(navParams.data.filter, events);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FromFilterPage');
  }
  
  itemSelected(i: number) {
    this.filter.data.currentIndex = i;
    this.publish();
    this.viewCtrl.dismiss();
  }
}
