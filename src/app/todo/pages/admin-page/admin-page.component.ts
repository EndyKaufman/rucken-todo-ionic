import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IRoute } from '../../shared/interfaces/route.interface';
import { AdminPageRoutes } from './admin-page.routes';

@Component({
  selector: 'admin-page',
  templateUrl: 'admin-page.component.html'
})

export class AdminPageComponent {
  page: IRoute;
  frames: IRoute[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page = AdminPageRoutes[0];
    this.frames = AdminPageRoutes[0].children;
  }
}
