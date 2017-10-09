import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class ApiProvider {
  options: any;

  constructor(public http: HttpClient) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");

    this.options = {
      headers: headers,
      withCredentials: true
    }
  }

  get(url: string, params?: any) {
    let reqOpts = {
      headers: this.options.headers,
      withCredentials: true,
      params: new HttpParams()
    }
    // Support easy query params for GET requests
    if (params) {
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(url, reqOpts);
  }

  post(url: string, body: any) {
    return this.http.post(url, body, this.options);
  }

  put(url: string, body: any) {
    return this.http.put(url, body, this.options);
  }

  delete(url: string) {
    return this.http.delete(url, this.options);
  }

  patch(url: string, body: any) {
    return this.http.put(url, body, this.options);
  }
}
