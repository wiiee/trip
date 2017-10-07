import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AreaBlock } from '../../entity/geo/area-block';
import { AreaType } from '../../entity/geo/area-type';
import { Area } from '../../entity/geo/area';

import { RegionProvider } from '../../providers/providers';

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
export class NearFilterPage {
  blocks: AreaBlock[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public regionProvider: RegionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearFilterPage');
  }

  ngOnInit() {
    if (this.navParams.data) {
      this.blocks = this.navParams.data.blocks;
    }

    if(this.blocks.length === 1){
      this.buildNextBlock(this.blocks[0]); 
    }
  }

  itemSelected(block: AreaBlock, item: Area) {
    if (item === this.blocks[0].options[0]) {
      this.blocks[0].type = AreaType.Region;
    }
    else if (item === this.blocks[0].options[1]) {
      block.type = AreaType.Metro;
    }

    block.current = item;
    this.buildNextBlock(block);
  }

  buildNextBlock(block: AreaBlock) {
    if(!block.current.hasChild){
      return;
    }

    //清空余下的block
    if (block.depth != this.blocks.length - 1) {
      this.blocks = this.blocks.slice(0, block.depth + 1);
    }

    if (block.type === AreaType.Region) {
      this.regionProvider.getRegionsByParentId(<number>block.current.id).then(data => {
        if (data && data.length > 0) {
          this.blocks.push(new AreaBlock(null, data, block.type, block.depth + 1));
        }
      });
    }
    else if(block.type === AreaType.Metro) {

    }
  }
}
