import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { MainPage } from '../pages/main/main';
import { NotificationPage } from '../pages/notification/notification';
import { NotificationActionPage} from '../pages/notification-action/notification-action';
import { AddNewdevicePage } from '../pages/add-newdevice/add-newdevice';



import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    TabsPage,
    MainPage,
    NotificationPage,
    NotificationActionPage,
    AddNewdevicePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    TabsPage,
    MainPage,
    NotificationPage,
    NotificationActionPage,
    AddNewdevicePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
