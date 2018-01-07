import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events } from 'ionic-angular';

import { BaseFilter } from '../base-filter';

/**
 * Generated class for the MoreFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more-filter',
  templateUrl: 'more-filter.html',
})
export class MoreFilterPage extends BaseFilter {
  constructor(public viewCtrl: ViewController, navParams: NavParams, events: Events) {
    super(navParams.data.filter, events);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreFilterPage');
  }
}
