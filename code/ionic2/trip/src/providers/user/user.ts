import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { ApiProvider } from '../api/api';
import { ContextProvider } from '../context/context';

import { Constant } from '../../shared/constant';
import { User } from '../../entity/user';
import { ServiceResult } from '../../entity/service-result';
import { md5 } from '../../shared/md5';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class UserProvider {
  _user: any;

  constructor(public apiProvider: ApiProvider, public contextProvider: ContextProvider) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  logIn(user: User, isEncrypt = true) {
    let logInUser = new User(user.id, user.password);
    if (isEncrypt) {
      logInUser.password = md5(logInUser.password);
    }

    let url = Constant.HOST + "/api/user/logIn";
    let seq = this.apiProvider.post(url, JSON.stringify(logInUser)).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      var result = new ServiceResult(res.successful, res.message);

      if (result.isSuccessful) {
        this.contextProvider.updateUserDetail(user.id, null);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signUp(user: User) {
    let signUpUser = new User(user.id, user.password);
    signUpUser.password = md5(signUpUser.password);

    let url = Constant.HOST + "/api/user/signUp?deviceId=" + this.contextProvider.deviceId;
    let seq = this.apiProvider.post(url, JSON.stringify(signUpUser)).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      var result = new ServiceResult(res.successful, res.message);
      
      if (result.isSuccessful) {
        this.contextProvider.updateUserDetail(user.id, null);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this.contextProvider.emptyUser();
  }
}
