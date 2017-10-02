import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { BasePage } from '../shared/base';

import { BuildingDetailPage } from '../building-detail/building-detail';
import { NearFilterPage } from '../near-filter/near-filter';
import { PriceFilterPage } from '../price-filter/price-filter';
import { FromFilterPage } from '../from-filter/from-filter';
import { MoreFilterPage } from '../more-filter/more-filter';

import { BuildingItem } from '../../entity/building-item';
import { FilterItem } from '../../entity/filter-item';
import { Img } from '../../entity/img';

/**
 * Generated class for the BuildingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-building-list',
  templateUrl: 'building-list.html',
})
export class BuildingListPage extends BasePage {
  items: BuildingItem[];
  filters: FilterItem[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    super(navCtrl);

    this.items = [];

    for (var i = 0; i < 10; i++) {
      let imgs: Img[] = [];
      imgs.push(new Img("assets/images/slide" + (i % 4 + 1) + ".jpg"));
      this.items.push(new BuildingItem(i.toString(), imgs));
    }

    this.filters = [];

    this.filters.push(new FilterItem(0, "附近", this.popoverCtrl.create(NearFilterPage), "arrow-down"));
    this.filters.push(new FilterItem(1, "来源", this.popoverCtrl.create(FromFilterPage), "arrow-down"));
    this.filters.push(new FilterItem(2, "租金", this.popoverCtrl.create(PriceFilterPage), "arrow-down"));
    this.filters.push(new FilterItem(3, "更多", this.popoverCtrl.create(MoreFilterPage), "arrow-down"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingListPage');
  }

  goDetail() {
    this.navCtrl.push(BuildingDetailPage);
  }

  selectFilter(filter: FilterItem) {
    if(filter.iconName === "arrow-down"){
      filter.iconName = "arrow-up";
    }
    else{
      filter.iconName = "arrow-down";
    }

    filter.popover.present();
  }
}
