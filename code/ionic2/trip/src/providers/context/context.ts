import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';
import { Storage } from '@ionic/storage';

import { Constant } from '../../shared/constant';
import { ApiProvider } from '../api/api';
import { GeoProvider } from '../geo/geo';

import { UserDetail } from '../../entity/user-detail';

import { LocalStorageKey } from '../../shared/local-storage-key';

/*
  Generated class for the ContextProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContextProvider {
  isAuthenticated: boolean = false;
  userDetail: UserDetail;
  deviceId: string;

  constructor(public apiProvider: ApiProvider, public device: Device, public storage: Storage, public geoProvider: GeoProvider) {
    console.log('Hello ContextProvider Provider');
    this.userDetail = new UserDetail(null, null, null);
  }

  public init(): void {
    if (Constant.IS_GEO_BACKGROUND_OPEN) {
      this.geoProvider.startBackgroundTracking();
    }
    else {
      this.geoProvider.startForegroundTracking();
    }

    this.storage.get(LocalStorageKey.DEVICE_ID).then(val => {
      this.deviceId = val;

      if (!this.deviceId) {
        this.storage.clear();
        this.deviceId = this.device.uuid;
        //let url = Constant.HOST + "/api/user/initDevice?deviceId=" + this.deviceId;
        //this.http.get(url).subscribe();
        this.storage.set(LocalStorageKey.DEVICE_ID, this.deviceId);
      }

      this.storage.get(LocalStorageKey.USER_DETAIL).then(val => {
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
    this.storage.remove(LocalStorageKey.USER_DETAIL);
  }  
}
