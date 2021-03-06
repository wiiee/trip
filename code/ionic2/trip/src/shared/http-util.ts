import { Headers, RequestOptionsArgs } from '@angular/http';

export class HttpUtil {
  public static HTTP_OPTIONS: RequestOptionsArgs;
  
  static init() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json; charset=utf-8");
    HttpUtil.HTTP_OPTIONS = {
      headers: headers,
      withCredentials: true
    };
  }
}

HttpUtil.init();