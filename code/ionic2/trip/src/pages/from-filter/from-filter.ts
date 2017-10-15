import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events } from 'ionic-angular';

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
export class FromFilterPage {
  items: string[];
  currentIndex: number;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public events: Events) {
    this.items = [];
    
    this.items.push("不限");
    this.items.push("个人");
    this.items.push("品牌公寓");
    
    this.currentIndex = this.navParams.data.filter.data.currentIndex;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FromFilterPage');
  }
  
  itemSelected(i: number) {
    this.currentIndex = i;
    this.navParams.data.filter.data.currentIndex = i;
    this.events.publish('buildingList:filter', this.navParams.data.filter);
    this.viewCtrl.dismiss();
  }
}
