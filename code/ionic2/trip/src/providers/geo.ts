import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { BaseService } from './base';
import { Location } from '../entity/location';
import { Constant } from '../shared/constant';
import { Subscription } from "rxjs/Subscription"

import { HttpUtil } from '../shared/http-util';

/*
  Generated class for the Geo provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GeoService extends BaseService {
  location: Location;
  watch: Subscription;
  constructor(public http: Http, public geolocation: Geolocation, public backgroundGeolocation: BackgroundGeolocation) {
    super();
    this.location = new Location(0, 0, null);
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
      if(location !== undefined && location.coords !== undefined){
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

    if(this.watch){
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

  private updateLocation(coords: Coordinates, isGetAddress: boolean = false): void{
      this.location.latitude = coords.latitude;
      this.location.longitude = coords.longitude;

      if (isGetAddress) {
        this.getAddress(this.location.latitude, this.location.longitude).then(address => {
          this.location.address = address;
        });
      }
  }

  public getAddress(latitude: number, longitude: number): Promise<string> {
    return new Promise(resolve => {
      var url = Constant.HOST + "/api/geo/getAddress?latitude=" + latitude + "&longitude=" + longitude;
      this.http.get(url, HttpUtil.HTTP_OPTIONS).map(res => res.text()).subscribe(data => {
        resolve(data);
      });
    });
  }
}
