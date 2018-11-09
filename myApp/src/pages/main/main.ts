import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { NotificationActionPage } from '../notification-action/notification-action';
import { AddNewdevicePage } from '../add-newdevice/add-newdevice';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  username:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = navParams.get('user_name');
    console.log("In the main page, now the user is " , this.username);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  checkNotification(){
    this.navCtrl.push(NotificationPage);

  }

  checkNotificationAction(){
    this.navCtrl.push(NotificationActionPage);
  }

  addNewDevice(){
    this.navCtrl.push(AddNewdevicePage);
  }

}
