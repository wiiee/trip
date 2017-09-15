import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Region } from "../entity/region";
import { Constant } from "../shared/constant";
import { BaseService } from './base';
import { HttpUtil } from '../shared/http-util';

/*
  Generated class for the RegionService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RegionService extends BaseService {
  public regionsWithParentId: any = {};
  public regionsWithParallelId: any = {};
  
  constructor(public http: Http) {
    super();
  }

  public getRegionsByParentId(parentId: string): Promise<Region[]> {
    if (this.regionsWithParentId[parentId]) {
      return Promise.resolve(this.regionsWithParentId[parentId]);
    }

    return new Promise(resolve => {
      var url = Constant.HOST + "/api/region/GetNextNodes?regionId=" + parentId;
      this.http.get(url, HttpUtil.HTTP_OPTIONS)
        .map(res => res.json())
        .subscribe(data => {
          var result = [];

          data.forEach(element => {
            result.push(new Region(element.Id, element.Name));
          });

          this.regionsWithParentId[parentId] = result;
          resolve(result);
        });
    });
  }

  public getParallelNodes(regionId: string): Promise<Region[]> {
    if (this.regionsWithParallelId[regionId]) {
      return Promise.resolve(this.regionsWithParallelId[regionId]);
    }

    return new Promise(resolve => {
      var url = Constant.HOST + "/api/region/GetParallelNodes?regionId=" + regionId;
      this.http.get(url, HttpUtil.HTTP_OPTIONS)
        .map(res => res.json())
        .subscribe(data => {
          var result = [];

          data.forEach(element => {
            result.push(new Region(element.Id, element.Name));
          });

          this.regionsWithParallelId[regionId] = result;
          resolve(result);
        });
    });
  }
}

