import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BuildingListPage } from '../building-list/building-list';
import { RentTypePage } from '../rent-type/rent-type';

import { Location } from '../../entity/location';

import { GeoService } from '../../providers/geo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  location: Location;

  constructor(public navCtrl: NavController, public geoService: GeoService) {
  }

  ngOnInit(){
    this.location = this.geoService.getLocation();
  }

  buildingList() {
    this.navCtrl.push(BuildingListPage);
  }

  rent() {
    this.navCtrl.push(RentTypePage);
  }
}
