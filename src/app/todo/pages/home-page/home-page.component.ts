import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IRoute } from '../../shared/interfaces/route.interface';
import { HomePageRoutes } from './home-page.routes';

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.component.html'
})

export class HomePageComponent {

  page: IRoute;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page = HomePageRoutes[0];
  }
}
