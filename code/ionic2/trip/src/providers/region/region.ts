import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

import { Area } from "../../entity/geo/area";
import { Constant } from "../../shared/constant";
/*
  Generated class for the RegionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegionProvider {
  public regionsWithParentId: any = {};
  public regionsWithParallelId: any = {};

  constructor(public apiProvider: ApiProvider) {
    console.log('Hello RegionProvider Provider');
  }

  public getRegionsByParentId(parentId: number): Promise<Area[]> {
    if (this.regionsWithParentId[parentId]) {
      return Promise.resolve(this.regionsWithParentId[parentId]);
    }

    return new Promise(resolve => {
      var url = Constant.HOST + "/api/region/getRegionAreasByParentId";
      var params = {
        parentId: parentId
      };

      this.apiProvider.get(url, params)
        .subscribe(res => {
          var result = [];

          res.forEach(element => {
            result.push({id: element.id, name: element.name, hasChild: element.hasChild});
          });

          this.regionsWithParentId[parentId] = result;
          resolve(result);
        });
    });
  }

  public getParallelNodes(regionId: string): Promise<Area[]> {
    if (this.regionsWithParallelId[regionId]) {
      return Promise.resolve(this.regionsWithParallelId[regionId]);
    }

    return new Promise(resolve => {
      var url = Constant.HOST + "/api/region/GetParallelNodes";
      var params = {
        regionId: regionId
      };

      this.apiProvider.get(url, params)
        .subscribe(data => {
          var result = [];

          data.forEach(element => {
            result.push({id: element.Id, name: element.Name});
          });

          this.regionsWithParallelId[regionId] = result;
          resolve(result);
        });
    });
  }
}
