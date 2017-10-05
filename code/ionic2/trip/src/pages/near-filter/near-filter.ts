import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AreaBlock } from '../../entity/geo/area-block';
import { AreaType } from '../../entity/geo/area-type';
import { Area } from '../../entity/geo/area';

import { RegionService } from '../../providers/region';

@Component({
  selector: 'page-near-filter',
  templateUrl: 'near-filter.html'
})
export class NearFilterPage implements OnInit {
  blocks: AreaBlock[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public regionService: RegionService) {
    this.blocks = [];
    this.blocks.push(new AreaBlock(new Area(325, "区域", true), [
      new Area(325, "区域", true),
      new Area(2, "地铁", true)
    ], AreaType.Region, 0));
  }

  ngOnInit() {
    this.blocks.forEach(block => {
      if (block.current) {
        this.buildNextBlock(block);
      }
    });
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
    //清空余下的block
    if (block.depth < this.blocks.length) {
      this.blocks = this.blocks.slice(0, block.depth + 1);
    }

    if (block.type === AreaType.Region) {
      this.regionService.getRegionsByParentId(<number>block.current.id).then(data => {
        if (data && data.length > 0) {
          this.blocks.push(new AreaBlock(null, data, block.type, block.depth + 1));
        }
      });
    }
    else if(block.type === AreaType.Metro) {

    }
  }
}