import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class ApiProvider {
  constructor(public http: HttpClient) {
  }

  get(url: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(url, reqOpts);
  }

  post(url: string, body: any, reqOpts?: any) {
    return this.http.post(url, body, reqOpts);
  }

  put(url: string, body: any, reqOpts?: any) {
    return this.http.put(url, body, reqOpts);
  }

  delete(url: string, reqOpts?: any) {
    return this.http.delete(url, reqOpts);
  }

  patch(url: string, body: any, reqOpts?: any) {
    return this.http.put(url, body, reqOpts);
  }
}
