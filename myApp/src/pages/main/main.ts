import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { NotificationActionPage } from '../notification-action/notification-action';
import { AddNewdevicePage } from '../add-newdevice/add-newdevice';
import {DevicePage} from '../device/device';

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
  private session_token :string;
  favouritena:boolean = false;
  favouriten:boolean = false;
  favourite1:boolean = false;
  favourite2:boolean = false;
  favourite3:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.session_token = navParams.data;
    console.log("In the main page, now the session_token is " , this.session_token);
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
  goDevicePage(){
    this.navCtrl.push(DevicePage);
  }

  addFavourite1(event: Event){
    event.stopPropagation();
    this.favourite1 = !this.favourite1;
  }
  addFavourite2(event: Event){
    event.stopPropagation();
    this.favourite2 = !this.favourite2;
  }
  addFavourite3(event: Event){
    event.stopPropagation();
    this.favourite3 = !this.favourite3;
  }

  addFavouritena(event: Event){
    event.stopPropagation();
    this.favouritena = !this.favouritena;
  }

  addFavouriten(event: Event){
    event.stopPropagation();
    this.favouriten = !this.favouriten;
  }

}
