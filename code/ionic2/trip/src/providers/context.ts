import { Injectable } from '@angular/core';
import { StorageService } from './storage';
import { GeoService } from './geo';
import { Constant } from '../shared/constant';
import { Device } from '@ionic-native/device';
import { Http } from '@angular/http';
import { UserDetail } from '../entity/user-detail';
import { LocalStorageKey } from '../shared/local-storage-key';

/*
  Generated class for the Init provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ContextService {
  isAuthenticated: boolean = false;
  userDetail: UserDetail;
  deviceId: string;

  public constructor(private http: Http, private device: Device, public storageService: StorageService, private geoService: GeoService) {
    this.userDetail = new UserDetail(null, null, null);
  }

  public init(): void {
    if (Constant.IS_GEO_BACKGROUND_OPEN) {
      this.geoService.startBackgroundTracking();
    }
    else {
      this.geoService.startForegroundTracking();
    }

    this.storageService.get(LocalStorageKey.DEVICE_ID).then(val => {
      this.deviceId = val;

      if (!this.deviceId) {
        this.storageService.clear();
        this.deviceId = this.device.uuid;
        //let url = Constant.HOST + "/api/user/initDevice?deviceId=" + this.deviceId;
        //this.http.get(url).subscribe();
        this.storageService.set(LocalStorageKey.DEVICE_ID, this.deviceId);
      }

      this.storageService.get(LocalStorageKey.USER_DETAIL).then(val => {
        if (val) {
          this.userDetail = JSON.parse(val);

          if (this.userDetail) {
            this.isAuthenticated = true;
          }
        }
      });
    });
  }

  public updateUserDetail(name: string, phoneNumber: string): void {
    this.userDetail.name = name;
    this.userDetail.phoneNumber = phoneNumber;
  }

  public emptyUser(): void {
    this.isAuthenticated = false;
    this.storageService.remove(LocalStorageKey.USER_DETAIL);
  }
}
