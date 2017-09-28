import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from '../pages/auth/auth';
import { WelcomePage } from '../pages/welcome/welcome';
import { BuildingListPage } from '../pages/building-list/building-list';
import { BuildingDetailPage } from '../pages/building-detail/building-detail';
import { RentTypePage } from '../pages/rent-type/rent-type';
import { RentPage } from '../pages/rent/rent';
import { NearFilterPage } from '../pages/near-filter/near-filter';

import { LogInComponent } from '../components/log-in/log-in';
import { SignUpComponent } from '../components/sign-up/sign-up';

import { UserService } from '../providers/user';
import { ContextService } from '../providers/context';
import { GeoService } from '../providers/geo';
import { CameraService } from '../providers/camera';
import { MessageService } from '../providers/message';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';
import { Camera } from '@ionic-native/camera';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { StorageService } from '../providers/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AuthPage,
    WelcomePage,
    BuildingListPage,
    BuildingDetailPage,
    RentTypePage,
    RentPage,
    NearFilterPage,
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AuthPage,
    WelcomePage,
    BuildingListPage,
    BuildingDetailPage,
    RentTypePage,
    RentPage,
    NearFilterPage,
    LogInComponent,
    SignUpComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    Camera,
    BackgroundGeolocation,
    Geolocation,
    ContextService,
    GeoService,
    CameraService,
    UserService,
    MessageService,
    StorageService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
