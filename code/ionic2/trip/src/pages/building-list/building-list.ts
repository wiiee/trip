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
import { FilterType } from '../../entity/filter-type';
import { PriceRange } from '../../entity/price-range';

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
    this.initFilters();
    this.items = [];

    for (var i = 0; i < 10; i++) {
      let imgs: Img[] = [];
      imgs.push(new Img("assets/images/slide" + (i % 4 + 1) + ".jpg"));
      this.items.push(new BuildingItem(i.toString(), imgs));
    }

    this.events.subscribe("buildingList:filter", filter => {
      //ToDo: filter房源

      console.log('buildingList:filter');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingListPage');
  }

  initFilters(): void {
    this.filters = [];

    var blocks = [];
    blocks.push(new AreaBlock(new Area(325, "区域", true), [
      new Area(325, "区域", true),
      new Area(2, "地铁", true)
    ], AreaType.Region, 0));
    this.filters.push(new FilterItem(FilterType.Near, "附近", NearFilterPage, { blocks: blocks }));

    let fromData = {
      items: ["不限", "个人", "品牌公寓"],
      currentIndex: 0
    };
    this.filters.push(new FilterItem(FilterType.From, "来源", FromFilterPage, fromData));

    let priceData = {
      items: [
        new PriceRange(0, 9999999, "不限"),
        new PriceRange(0, 500, "500元以下"),
        new PriceRange(500, 1000, "500-1000元"),
        new PriceRange(1000, 2000, "1000-2000元"),
        new PriceRange(2000, 3000, "2000-3000元"),
        new PriceRange(3000, 5000, "3000-5000元"),
        new PriceRange(5000, 8000, "5000-8000元"),
        new PriceRange(8000, 9999999, "8000元以上")],
      currentIndex: 0
    };
    this.filters.push(new FilterItem(FilterType.Price, "租金", PriceFilterPage, priceData));

    this.filters.push(new FilterItem(FilterType.More, "更多", MoreFilterPage));
  }

  goDetail() {
    this.navCtrl.push(BuildingDetailPage);
  }

  selectFilter(ev: UIEvent, filter: FilterItem) {
    let popover = this.popoverCtrl.create(filter.page, { filter: filter }, { cssClass: "filter-popover" });

    popover.present({
      ev: ev
    });
  }
}
