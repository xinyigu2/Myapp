import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { NotificationActionPage } from '../notification-action/notification-action';
import { AddNewdevicePage } from '../add-newdevice/add-newdevice';
import {DevicePage} from '../device/device';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

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
  favourite:Array<boolean> = [];
  deviceTitles:Array<string> = [];
  deviceContent:Array<string> = [];
  deviceFavourite:Array<boolean> = [];

  public items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.session_token = navParams.data;
    console.log("In the main page, now the session_token is " , this.session_token);
    this.getData();
  }

  getData(){
    let url = '../assets/Birds.json';
    console.log("please read");
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result =>{
      this.items = result;
      for(let item of this.items){
        if(item.favourite == "Yes"){
          this.favourite.push(true);
        }
        else{
          this.favourite.push(false);
        }
      }
    });
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
  goDevicePage(itemid: string){
    this.navCtrl.push(DevicePage,{
      itemid:itemid
    });
  }

  addFavouritena(event: Event){
    event.stopPropagation();
    this.favouritena = !this.favouritena;
  }

  addFavouriten(event: Event){
    event.stopPropagation();
    this.favouriten = !this.favouriten;
  }

  addFavourite(event: Event, itemid:number){
    event.stopPropagation();
    this.favourite[itemid] = !this.favourite[itemid];
  }

}
