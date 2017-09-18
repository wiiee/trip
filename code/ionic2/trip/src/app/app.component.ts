import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from '../pages/auth/auth';
import { WelcomePage } from '../pages/welcome/welcome';

import { StorageService } from '../providers/storage';
import { ContextService } from '../providers/context';

import { LocalStorageKey } from '../shared/local-storage-key';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  backPressed: boolean;
  isProcessing: boolean;
  isNotFirstIn: boolean;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public contextService: ContextService,
    public alertCtrl: AlertController, public storageService: StorageService) {
    this.storageService.get(LocalStorageKey.IS_NOT_FIRST_IN).then((result) => {
      // this.rootPage = WelcomePage;
      // if (result) {
      //   this.isNotFirstIn = true;
      // }
      // else{
      //   this.rootPage = WelcomePage;
      //   this.storageService.set(LocalStorageKey.IS_NOT_FIRST_IN, true);
      // }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      contextService.init();

      // if (!contextService.isAuthenticated) {
      //   this.rootPage = AuthPage;
      // }
      // else {
      //   this.rootPage = TabsPage;
      // }

      this.rootPage = TabsPage;

      // if(this.isNotFirstIn){
      //   if (!contextService.isAuthenticated) {
      //     this.rootPage = AuthPage;
      //   }
      //   else {
      //     this.rootPage = TabsPage;
      //   }
      // }

      if (this.platform.is('android')) {
        platform.backButton.subscribe(() => {
          this.registerBackButtonListener();
        });
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  registerBackButtonListener(): void {
    if (this.backPressed && !this.isProcessing) {
      this.confirmExitApp();
    }
    else {
      this.backPressed = true;
      setTimeout(() => {
        this.backPressed = false;
      }, 2000);
    }
  }

  confirmExitApp(): void {
    this.isProcessing = true;
    let confirm = this.alertCtrl.create({
      title: '退出',
      message: '确定退出?',
      buttons: [
        {
          text: '取消',
          handler: () => {
            this.isProcessing = false;
          }
        },
        {
          text: '退出',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    confirm.present();
  }
}
