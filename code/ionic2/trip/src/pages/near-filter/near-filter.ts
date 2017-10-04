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
    this.blocks.push(new AreaBlock({ id: 325, name: "区域" }, [
      { id: 325, name: "区域" },
      { id: 2, name: "地铁" }
    ], AreaType.Region, 0));
  }

  ngOnInit(){
    this.blocks.forEach(block => {
      if(block.current){
        this.buildNextBlock(block);
      }
    });
  }

  itemSelected(block: AreaBlock, item: Area) {
    block.current = item;
    this.buildNextBlock(block);
  }

  buildNextBlock(block: AreaBlock) {
    //清空余下的block
    if(block.depth < this.blocks.length){
      this.blocks = this.blocks.slice(0, block.depth + 1);
    }

    if(block.type === AreaType.Region){
      this.regionService.getRegionsByParentId(<number>block.current.id).then(data => {
        if(data && data.length > 0){
          this.blocks.push(new AreaBlock(null, data, block.type, block.depth + 1));
        }
      });
    }
  }
}