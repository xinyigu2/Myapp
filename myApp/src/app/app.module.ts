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
import { MessagesPage} from '../pages/messages/messages';
import { DevicePage} from '../pages/device/device';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { File } from '@ionic-native/file';


///
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
///

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    TabsPage,
    MainPage,
    NotificationPage,
    NotificationActionPage,
    AddNewdevicePage,
    MessagesPage,
    DevicePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
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
    AddNewdevicePage,
    MessagesPage,
    DevicePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class AppModule {}
