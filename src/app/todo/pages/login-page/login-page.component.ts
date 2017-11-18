import { Component, Injector } from '@angular/core';
import { AccountService, User } from '@rucken/core';
import { NavController, NavParams } from 'ionic-angular';

import { BaseComponent } from '../../base/base-component/base-component.component';
import { IRoute } from '../../shared/interfaces/route.interface';
import { LoginPageRoutes } from './login-page.routes';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html'
})

export class LoginPageComponent extends BaseComponent {

  page: IRoute;
  modelMeta: any = { titles: User.titles };
  user: User;
  constructor(
    public injector: Injector,
    public navCtrl: NavController,
    public navParams: NavParams,
    public accountService: AccountService) {
    super(injector);
    this.page = LoginPageRoutes[0];
  }
  init() {
    super.init();
    this.user = new User();
  }
  login() {
    this.accountService.login(this.user).subscribe(
      (account: any | User) => {
        alert('ok');
      },
      (errors: any) => {
        if (errors.message) {
          this.app.component.showErrorModal(
            {
              message: errors.message.join(', '),
              onOk: () => {
                alert('error');
              }
            }
          );
        } else {
          alert('error');
        }
      }
    );
  }
}
