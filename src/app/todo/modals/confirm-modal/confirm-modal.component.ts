import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { NavParams, Platform, ViewController } from 'ionic-angular';

import { BaseModalComponent } from '../../base/base-modal/base-modal.component';

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ConfirmModalComponent extends BaseModalComponent {

  constructor(
    public injector: Injector,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    super(injector, platform, params, viewCtrl);
  }
}
