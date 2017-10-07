import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BuildingListPage } from '../pages';
import { RentTypePage } from '../pages';

import { Location } from '../../entity/location';

import { GeoProvider } from '../../providers/providers';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  location: Location;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geoProvider: GeoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ngOnInit(){
    this.location = this.geoProvider.getLocation();
  }

  buildingList() {
    this.navCtrl.push(BuildingListPage);
  }

  rent() {
    this.navCtrl.push(RentTypePage);
  }
}
