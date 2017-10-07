import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  current: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    
        this.items.push("不限");
        this.items.push("个人");
        this.items.push("品牌公寓");
    
        this.current = this.items[0];    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FromFilterPage');
  }
  
  itemSelected(item: string) {
    this.current = item;
  }
}
