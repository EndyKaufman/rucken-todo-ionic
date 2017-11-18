import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IRoute } from '../../../shared/interfaces/route.interface';
import { UsersFrameRoutes } from './users-frame.routes';

@Component({
  selector: 'users-frame',
  templateUrl: 'users-frame.component.html'
})

export class UsersFrameComponent {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  frame: IRoute;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.frame = UsersFrameRoutes[0];

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  ngOnInit() { }
  itemTapped(event: any, item: any) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(UsersFrameComponent, {
      item: item
    });
  }
}
