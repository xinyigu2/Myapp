import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { NotificationActionPage } from '../notification-action/notification-action';
/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  favouritena:boolean = false;
  favouriten:boolean = false;
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }
  checkNotification(){
    this.navCtrl.push(NotificationPage);
  }

  checkNotificationAction(){
    this.navCtrl.push(NotificationActionPage);
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
