import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../entity/user';
import { ServiceResult } from '../entity/service-result';
import { ContextService } from '../providers/context';
import { Constant } from '../shared/constant';
import { HttpUtil } from '../shared/http-util';
import { md5 } from '../shared/md5';
import { BaseService } from './base';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService extends BaseService {  
  constructor(public http: Http, public contextService: ContextService) {
    super();
  }

  public logIn(user: User, isEncrypt = true): Promise<ServiceResult> {
    let logInUser = new User(user.id, user.password, user.confirmPassword);
    if (isEncrypt) {
      logInUser.password = md5(logInUser.password);
      logInUser.confirmPassword = logInUser.password;
    }

    return new Promise(resolve => {
      let url = Constant.HOST + "/api/user/logIn";
      this.http.post(url, JSON.stringify(logInUser), HttpUtil.HTTP_OPTIONS)
        .map(res => res.json())
        .subscribe(data => {
          //var result = new ServiceResult(data.successful, data.message);
          var result = new ServiceResult(data.IsSuccessful, data.Message);

          if (result.isSuccessful) {
            this.contextService.updateUserDetail(user.id, null);
          }

          resolve(result);
        });
    });
  }

  public signUp(user: User): Promise<ServiceResult> {
    let signUpUser = new User(user.id, user.password, user.confirmPassword);
    signUpUser.password = md5(signUpUser.password);
    signUpUser.confirmPassword = signUpUser.password;
    
    return new Promise(resolve => {
      let url = Constant.HOST + "/api/user/signUp?deviceId=" + this.contextService.deviceId;
      this.http.post(url, JSON.stringify(signUpUser), HttpUtil.HTTP_OPTIONS)
        .map(res => res.json())
        .subscribe(data => {
          var result = new ServiceResult(data.successful, data.message);

          if (result.isSuccessful) {
            this.contextService.updateUserDetail(user.id, null);
          }

          resolve(result);
        });
    });
  }

  public logOff(): Promise<void> {
    return new Promise<void>(resolve => {
      this.contextService.emptyUser();
      resolve();
    });
  }
}
