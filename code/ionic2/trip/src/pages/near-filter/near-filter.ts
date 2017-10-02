import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegionNode } from '../../entity/region-node';

@Component({
  selector: 'page-near-filter',
  templateUrl: 'near-filter.html'
})
export class NearFilterPage {
  nodes: RegionNode[];
  
  constructor(public navCtrl: NavController) {

  }

}
