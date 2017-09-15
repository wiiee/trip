import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BaseService } from './base';
import { Camera } from '@ionic-native/camera';

/*
  Generated class for the Camera provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CameraService extends BaseService {
  option: any;
  constructor(public http: Http, public camera: Camera) {
    super();
    this.option = {
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100,
      targetWidth: 300,
      targetHeight: 300,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    };
  }

  public takePhoto(): Promise<string> {
    return new Promise(resolve => {
      this.camera.getPicture(this.option).then(imgData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        //let base64Image = 'data:image/jpeg;base64,' + imageData;
        resolve(imgData);
      }, (err) => {
        // Handle error
        resolve(null);
      });
    });

  }
}
