import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Events } from 'ionic-angular';

import { BuildingDetailPage } from '../pages';

import { NearFilterPage } from '../pages';
import { PriceFilterPage } from '../pages';
import { FromFilterPage } from '../pages';
import { MoreFilterPage } from '../pages';

import { BuildingItem } from '../../entity/building-item';
import { FilterItem } from '../../entity/filter-item';
import { Img } from '../../entity/img';

import { AreaBlock } from '../../entity/geo/area-block';
import { AreaType } from '../../entity/geo/area-type';
import { Area } from '../../entity/geo/area';

/**
 * Generated class for the BuildingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-building-list',
  templateUrl: 'building-list.html',
})
export class BuildingListPage {
  items: BuildingItem[];
  filters: FilterItem[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public events: Events) {
    this.items = [];

    for (var i = 0; i < 10; i++) {
      let imgs: Img[] = [];
      imgs.push(new Img("assets/images/slide" + (i % 4 + 1) + ".jpg"));
      this.items.push(new BuildingItem(i.toString(), imgs));
    }

    var blocks = [];
    blocks.push(new AreaBlock(new Area(325, "区域", true), [
      new Area(325, "区域", true),
      new Area(2, "地铁", true)
    ], AreaType.Region, 0));

    this.filters = [];

    this.filters.push(new FilterItem(0, "附近", NearFilterPage, { blocks: blocks }));
    this.filters.push(new FilterItem(1, "来源", FromFilterPage, { currentIndex: 0 }));
    this.filters.push(new FilterItem(2, "租金", PriceFilterPage, { currentIndex: 0 }));
    this.filters.push(new FilterItem(3, "更多", MoreFilterPage));

    this.events.subscribe("buildingList:filter", filter => {
      console.log('buildingList:filter');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingListPage');
  }

  goDetail() {
    this.navCtrl.push(BuildingDetailPage);
  }

  selectFilter(ev: UIEvent, filter: FilterItem) {
    let popover = this.popoverCtrl.create(filter.page, {filter: filter}, { cssClass: "filter-popover" });

    popover.present({
      ev: ev
    });
  }
}
