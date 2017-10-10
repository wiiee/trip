import { Injectable } from '@angular/core';

import 'rxjs/add/operator/filter';
import { Subscription } from "rxjs/Subscription"

import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';

import { ApiProvider } from '../api/api';

import { Location } from '../../entity/location';
import { Constant } from '../../shared/constant';

/*
  Generated class for the GeoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeoProvider {
  location: Location;
  watch: Subscription;

  constructor(public apiProvider: ApiProvider, public geolocation: Geolocation, public backgroundGeolocation: BackgroundGeolocation) {
    console.log('Hello GeoProvider Provider');
  }

  public startBackgroundTracking(): void {
    let config = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    };

    this.backgroundGeolocation.configure(config).subscribe(location => {
      console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
      if (location !== undefined && location.coords !== undefined) {
        this.updateLocation(location.coords);
      }
    }, (err) => {
      console.log(err);
    });

    // Turn ON the background-geolocation system.
    this.backgroundGeolocation.start();
  }

  public stopTracking(): void {
    console.log('stopTracking');

    this.backgroundGeolocation.finish();

    if (this.watch) {
      this.watch.unsubscribe();
    }
  }

  public getLocation(): Location {
    return this.location;
  }

  public startForegroundTracking(): void {
    // Foreground Tracking
    let options = {
      maximumAge: 300000,
      timeout: 60000,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation.watchPosition(options).filter(p => p !== undefined && p.coords !== undefined).subscribe(position => {
      console.log(position);

      this.updateLocation(position.coords, true);
    });
  }

  private updateLocation(coords: Coordinates, isGetAddress: boolean = false): void {
    if (this.location) {
      this.location.latitude = coords.latitude;
      this.location.longitude = coords.longitude;

      if (isGetAddress) {
        this.getAddress(this.location.latitude, this.location.longitude).then(address => {
          this.location.address = address;
        });
      }
    }
  }

  public getAddress(latitude: number, longitude: number): Promise<string> {
    return new Promise(resolve => {
      var url = Constant.HOST + "/api/geo/getAddress?latitude=" + latitude + "&longitude=" + longitude;
      this.apiProvider.get(url).subscribe(data => {
        resolve(data);
      });
    });
  }
}
