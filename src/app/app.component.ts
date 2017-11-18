import { Component, EventEmitter, Output, ViewChild, Injector } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';

import { TodoIonicframeworkRoutes } from './app.routes';
import { IRoute } from './todo/shared/interfaces/route.interface';
import { BaseComponent } from './todo/base/base-component/base-component.component';
import { ModalController } from 'ionic-angular';
import { AlertModalComponent } from './todo/modals/alert-modal/alert-modal.component';

@Component({
  templateUrl: 'app.component.html',
  entryComponents: [AlertModalComponent],
})
export class TodoIonicframeworkAppComponent extends BaseComponent {

  @ViewChild(Nav)
  nav: Nav;
  @Output()
  onChangePage: EventEmitter<IRoute> = new EventEmitter<IRoute>();
  pages: IRoute[] = TodoIonicframeworkRoutes;
  rootPage: any;

  constructor(
    public injector: Injector,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public modalCtrl: ModalController
  ) {
    super(injector)
    this.initializeApp();
  }
  afterCreate() {
    super.afterCreate();
    // You need this small hack in order to catch application root view container ref
    this.app.viewContainerRef = this.viewContainerRef;
    this.app.component = this;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.openPage(this.pages[0]);
    });
  }
  openPage(page: IRoute) {
    this.nav.setRoot(page.component);
    this.onChangePage.emit(page);
  }
  showErrorModal(options: any) {
    let modal = this.modalCtrl.create(AlertModalComponent, options);
    modal.present();
    
  }
  showInfoModal(options: any) {
    //alert(message);
  }
  showContentModal(options:any) {
    //alert(content);
  }
}
