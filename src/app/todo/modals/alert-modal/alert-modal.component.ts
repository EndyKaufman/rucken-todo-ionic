import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Injector } from '@angular/core';
import { translate } from '@rucken/core';
import { EndpointStatusEnum } from '@rucken/core/shared/enums/endpoint-status.enum';
import { NavParams, Platform, ViewController } from 'ionic-angular';

import { BaseModalComponent } from '../../base/base-modal/base-modal.component';

@Component({
  selector: 'alert-modal',
  templateUrl: './alert-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AlertModalComponent extends BaseModalComponent {

  constructor(
    public injector: Injector,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    super(injector, platform, params, viewCtrl);
  }
}
