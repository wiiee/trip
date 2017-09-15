import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageService {
  constructor(public storage: Storage) {

  }

  public get(key: any): Promise<any> {
      return this.storage.get(key);
  }

  public set(key: any, value: any): void {
    this.storage.set(key, value);
  }

  public clear(): void {
    this.storage.clear();
  }

  public remove(key: any): void {
    this.storage.remove(key);
  }
}
