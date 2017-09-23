import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuildingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-building-detail',
  templateUrl: 'building-detail.html',
})
export class BuildingDetailPage {
  title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = "发布整租";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingDetailPage');
  }

}
