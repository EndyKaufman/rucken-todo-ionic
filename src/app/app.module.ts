import { FormsModule } from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { Http, RequestOptions, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {
  AccountService,
  AppService,
  EndpointHelper,
  HttpHelper,
  RepositoryHelper,
  RuckenCoreServices,
  ThemesService,
} from '@rucken/core';
import { AuthHttp } from 'angular2-jwt';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { TodoIonicframeworkAppComponent } from './app.component';
import { TodoIonicframeworkComponents } from './todo/index';
import { IonicAccountService } from './todo/shared/services/account.service';
import { AuthHttpFactory } from './todo/shared/factories/auth-http.factory';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TodoIonicframeworkAppComponent,
    ...TodoIonicframeworkComponents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
    }),
    IonicModule.forRoot(TodoIonicframeworkAppComponent),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TodoIonicframeworkAppComponent,
    ...TodoIonicframeworkComponents
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RuckenCoreServices,
    { provide: ThemesService, useClass: ThemesService },
    { provide: AppService, useClass: AppService },
    { provide: AccountService, useClass: IonicAccountService },
    { provide: AuthHttp, useFactory: AuthHttpFactory.create, deps: [Http, RequestOptions] },
    { provide: EndpointHelper, useClass: EndpointHelper },
    { provide: RepositoryHelper, useClass: RepositoryHelper },
    { provide: HttpHelper, useClass: HttpHelper },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class TodoIonicframeworkAppModule { }
