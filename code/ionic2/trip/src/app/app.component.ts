import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, AlertController } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';
import { Settings } from '../providers/providers';

import { ContextProvider } from '../providers/providers';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = FirstRunPage;

  backPressed: boolean;
  isProcessing: boolean;

  @ViewChild(Nav) nav: Nav;

  constructor(private translate: TranslateService, public platform: Platform, settings: Settings, private config: Config, 
    private statusBar: StatusBar, private splashScreen: SplashScreen, public contextProvider: ContextProvider, public alertCtrl: AlertController ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      contextProvider.init();

      if (this.platform.is('android')) {
        this.platform.backButton.subscribe(() => {
          this.registerBackButtonListener();
        });
      }

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
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
