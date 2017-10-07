import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RentPage } from '../rent/rent';

/**
 * Generated class for the RentTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rent-type',
  templateUrl: 'rent-type.html',
})
export class RentTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentTypePage');
  }

  rentWhole() {
    this.navCtrl.push(RentPage);
  }
}
