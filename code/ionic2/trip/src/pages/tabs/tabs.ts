import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: any[];

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
    });

    this.tabRoots = [
      {
        root: Tab1Root,
        tabTitle: this.tab1Title,
        tabIcon: 'home'
      },
      {
        root: Tab2Root,
        tabTitle: this.tab2Title,
        tabIcon: 'contacts'
      },
      {
        root: Tab3Root,
        tabTitle: this.tab3Title,
        tabIcon: 'information-circle'
      }
    ];
  }
}
