import { Component, EventEmitter, Output, ViewChild, Injector } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';

import { TodoIonicframeworkRoutes } from './app.routes';
import { IRoute } from './todo/shared/interfaces/route.interface';
import { BaseComponent } from './todo/base/base-component/base-component.component';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { translate } from '@rucken/core/shared/common/utils';
import { Alert } from 'ionic-angular';

@Component({
  templateUrl: 'app.component.html'
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
    public alertCtrl: AlertController
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
  showErrorModal(options: any): Alert {
    const message = options.message ? options.message : '';
    const title = this.translateService.instant(options.title ? options.title : translate('Error'));
    const buttons: any[] = [];
    options.onOk = options.onOk ? options.onOk : (data: any) => { };
    if (options.onOk) {
      buttons.push({
        text: this.translateService.instant(options.okTitle ? options.okTitle : translate('OK')),
        handler: (data: any) => {
          options.onOk(data);
        }
      })
    }
    if (options.onClose) {
      buttons.push({
        text: this.translateService.instant(options.closeTitle ? options.closeTitle : translate('OK')),
        handler: (data: any) => {
          options.onClose(data);
        }
      })
    }
    const alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: buttons
    });
    alert.present();
    return alert;
  }
  showInfoModal(options: any) {
    const message = options.message ? options.message : '';
    const title = this.translateService.instant(options.title ? options.title : translate('Info'));
    const buttons: any[] = [];
    options.onOk = options.onOk ? options.onOk : (data: any) => { };
    if (options.onOk) {
      buttons.push({
        text: this.translateService.instant(options.okTitle ? options.okTitle : translate('OK')),
        handler: (data: any) => {
          options.onOk(data);
        }
      })
    }
    if (options.onClose) {
      buttons.push({
        text: this.translateService.instant(options.closeTitle ? options.closeTitle : translate('OK')),
        handler: (data: any) => {
          options.onClose(data);
        }
      })
    }
    const alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: buttons
    });
    alert.present();
    return alert;
  }
  showConfirmModal(options: any) {
    const message = options.message ? options.message : '';
    const title = this.translateService.instant(options.title ? options.title : translate('Info'));
    const buttons: any[] = [];
    options.onOk = options.onOk ? options.onOk : (data: any) => { };
    options.onClose = options.onClose ? options.onClose : (data: any) => { };
    if (options.onOk) {
      buttons.push({
        text: this.translateService.instant(options.okTitle ? options.okTitle : translate('OK')),
        handler: (data: any) => {
          options.onOk(true, data);
        }
      })
    }
    if (options.onClose) {
      buttons.push({
        text: this.translateService.instant(options.closeTitle ? options.closeTitle : translate('OK')),
        handler: (data: any) => {
          options.onOk(false, data);
        }
      })
    }
    const alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: buttons
    });
    alert.present();
    return alert;
  }
}
