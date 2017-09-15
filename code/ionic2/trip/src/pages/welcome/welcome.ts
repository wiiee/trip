import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { AuthPage } from '../auth/auth';

import { ContextService } from '../../providers/context';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public contextService: ContextService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  goToHome() {
    if (!this.contextService.isAuthenticated) {
      this.navCtrl.setRoot(AuthPage);
    }
    else {
      this.navCtrl.setRoot(TabsPage);
    }
  }
}
