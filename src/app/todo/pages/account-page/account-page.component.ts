import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IRoute } from '../../shared/interfaces/route.interface';
import { AccountPageRoutes } from './account-page.routes';

@Component({
  selector: 'account-page',
  templateUrl: 'account-page.component.html'
})

export class AccountPageComponent {
  page: IRoute;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page = AccountPageRoutes[0];
  }
}
