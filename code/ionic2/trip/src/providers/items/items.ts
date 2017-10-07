import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { ApiProvider } from '../api/api';

@Injectable()
export class Items {

  constructor(public apiProvider: ApiProvider) { }

  query(params?: any) {
    return this.apiProvider.get('/items', params);
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
