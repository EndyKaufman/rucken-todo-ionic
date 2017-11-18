import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { translate } from '@rucken/core/shared/common/utils';
import { EndpointStatusEnum } from '@rucken/core/shared/enums/endpoint-status.enum';
import { NavParams, Platform, ViewController } from 'ionic-angular';

import { BaseComponent } from '../base-component/base-component.component';

@Component({
  selector: 'base-modal'
})

export class BaseModalComponent extends BaseComponent {

  @Input()
  hideOnClose?: boolean;
  @Input()
  hideButton?: boolean;
  @Input()
  title?: string;
  @Input()
  message?: string;
  @Input()
  okTitle = translate('OK');
  @Input()
  closeTitle = translate('Close');
  @Input()
  okInProcess = false;
  @Output()
  onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onOk: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public injector: Injector,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    super(injector);
    this.message = params.get('message') ? params.get('message') : '';
    this.title = params.get('title') ? params.get('title') : translate('Info');
    this.hideOnClose = params.get('hideOnClose') ? params.get('hideOnClose') : true;
    this.hideButton = params.get('hideButton') ? params.get('hideButton') : false;

    if (params.get('onOk')) {
      this.onOk.subscribe((modal: any) => params.get('onOk')(modal));
    }
    if (params.get('onClose')) {
      this.onClose.subscribe((modal: any) => params.get('onClose')(modal));
    }
  }
  close() {
    if (this.hideOnClose) {
      this.viewCtrl.dismiss();
    }
    this.onClose.emit(this);
    return false;
  }
  ok() {
    this.onOk.emit(this);
    return false;
  }
  okInProcessFromStatus(status: EndpointStatusEnum) {
    this.okInProcess =
      status === EndpointStatusEnum.Creating ||
      status === EndpointStatusEnum.Updating ||
      status === EndpointStatusEnum.Removing ||
      status === EndpointStatusEnum.Processing ||
      status === EndpointStatusEnum.Loading;
  }
}
