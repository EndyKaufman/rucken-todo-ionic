import 'rxjs/add/operator/takeUntil';

import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { User, AccountService } from '@rucken/core';
import { Subject } from 'rxjs/Subject';
import { AppService } from '@rucken/core/shared/services/app.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Injector } from '@angular/core';

@Component({
    selector: 'base-component',
    template: ''
})
export class BaseComponent implements OnInit, OnDestroy {

    @Input()
    account: any | User;
    @Input()
    text = '';
    @Input()
    name?: string;
    @Input()
    focused: boolean;
    @Input()
    errors: EventEmitter<any> = new EventEmitter<any>();
    @Input()
    info: EventEmitter<any> = new EventEmitter<any>();

    errorsValue: any;
    infoValue: any;
    [key: string]: any;

    destroyed$: Subject<boolean> = new Subject();

    accountService: AccountService;
    app: AppService;
    // translateService: TranslateService;
    sanitizer: DomSanitizer;

    constructor(
        public injector: Injector
      ) {
        this.accountService = injector.get(AccountService);
        this.app = injector.get(AppService);
        this.sanitizer = injector.get(DomSanitizer);
      }

    get errorMessage(): any {
        const arr: string[] = [];
        let text = '';
        if (this.name && this.errorsValue && this.errorsValue[this.name]) {
            for (let i = 0; i < this.errorsValue[this.name].length; i++) {
                if (this.errorsValue[this.name][i]) {
                    text = this.translate(this.errorsValue[this.name][i]);
                    arr.push(text);
                }
            }
        }
        if (arr.length > 0) {
            return arr.join(', ');
        }
        return false;
    }
    get infoMessage(): any {
        const arr: string[] = [];
        let text = '';
        if (this.name && this.infoValue && this.infoValue[this.name]) {
            for (let i = 0; i < this.infoValue[this.name].length; i++) {
                if (this.infoValue[this.name][i]) {
                    text = this.translate(this.infoValue[this.name][i]);
                    arr.push(text);
                }
            }
        }
        if (arr.length > 0) {
            return arr.join(', ');
        }
        return false;
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
    ngOnInit() {
        if (this.app && this.app.translateService && this.translateService) {
            this.translateService.store = this.app.translateService.store;
        }
        this.afterCreate();
        this.init();
    }
    afterCreate() {
        if (this.accountService) {
            this.accountService.account$.takeUntil(this.destroyed$).subscribe((account: any | User) => this.account = account);
            this.account = this.accountService.account;
        }
    }
    init() {
        if (this.errors) {
            this.errors.subscribe((data: any) => {
                this.errorsValue = data;
                const keys = Object.keys(data);
                if (keys[0] === this.name) {
                    this.focus();
                }
            });
        }
        if (this.info) {
            this.info.subscribe((data: any) => {
                this.infoValue = data;
                const keys = Object.keys(data);
                if (keys[0] === this.name) {
                    this.focus();
                }
            });
        }
        if (this.focused === undefined) {
            this.focused = false;
        }
        setTimeout((out: any) => {
            if (this.focused === true) {
                this.focus();
            }
        }, 300);
    }
    checkPermissions(permissionNames: string[]) {
        if (this.account) {
            return this.account.checkPermissions(permissionNames);
        }
        return false;
    }
    keys(object: {}) {
        return Object.keys(object);
    }
    focus() {
        let inputElement: any = this.inputElement;
        if (!inputElement) {
            inputElement = this.focusElement;
        }
        while (inputElement) {
            if (inputElement.focus) {
                inputElement.focus();
                break;
            }
            if (inputElement && inputElement.nativeElement) {
                inputElement = inputElement.nativeElement;
            } else {
                if (inputElement && inputElement.inputElement) {
                    inputElement = inputElement.inputElement;
                } else {
                    break;
                }
            }
        }
    }
}
