import { Component, OnInit } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events } from 'ionic-angular';

import { AreaBlock } from '../../../entity/geo/area-block';
import { AreaType } from '../../../entity/geo/area-type';
import { Area } from '../../../entity/geo/area';

import { RegionProvider } from '../../../providers/providers';

import { BaseFilter } from '../base-filter';

/**
 * Generated class for the NearFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-near-filter',
  templateUrl: 'near-filter.html',
})
export class NearFilterPage extends BaseFilter implements OnInit {
  constructor(public viewCtrl: ViewController, navParams: NavParams, public regionProvider: RegionProvider, events: Events ) {
    super(navParams.data.filter, events);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearFilterPage');
  }

  ngOnInit() {
    if(this.filter.data.blocks.length === 1){
      this.buildNextBlock(this.filter.data.blocks[0]); 
    }
  }

  itemSelected(block: AreaBlock, item: Area) {
    if (item === this.filter.data.blocks[0].options[0]) {
      this.filter.data.blocks[0].type = AreaType.Region;
    }
    else if (item === this.filter.data.blocks[0].options[1]) {
      block.type = AreaType.Metro;
    }

    block.current = item;
    this.buildNextBlock(block);

    this.publish();
  }

  buildNextBlock(block: AreaBlock) {
    //清空余下的block
    if (block.depth != this.filter.data.blocks.length - 1) {
      this.filter.data.blocks = this.filter.data.blocks.slice(0, block.depth + 1);
    }

    if(!block.current.hasChild){
      return;
    }

    if (block.type === AreaType.Region) {
      this.regionProvider.getRegionsByParentId(<number>block.current.id).then(data => {
        if (data && data.length > 0) {
          this.filter.data.blocks.push(new AreaBlock(null, data, block.type, block.depth + 1));
        }
      });
    }
    else if(block.type === AreaType.Metro) {

    }
  }
}
