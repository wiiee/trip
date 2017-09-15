import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { BasePage } from '../shared/base';

import { ContextService } from '../../providers/context';

import { LogInComponent } from '../../components/log-in/log-in';
import { SignUpComponent } from '../../components/sign-up/sign-up';

/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-auth',
  entryComponents: [LogInComponent, SignUpComponent],
  templateUrl: 'auth.html',
})
export class AuthPage extends BasePage {
  titleIndex: number;
  titles: string[];
  public constructor(public navCtrl: NavController, public events: Events, public contextService: ContextService) {
      super(navCtrl);

      this.titleIndex = 0;
      this.titles = ["登陆", "注册"];
      this.listenToEvents();
  }

  public selectTitle(i: number): void {
      this.titleIndex = i;
  }

  public listenToEvents(): void {
      this.events.subscribe('user:login', () => {
        this.contextService.isAuthenticated = true;
        this.navCtrl.push(TabsPage);
      });

      this.events.subscribe('user:logoff', () => {
        this.contextService.isAuthenticated = false;
      });
  }
}
