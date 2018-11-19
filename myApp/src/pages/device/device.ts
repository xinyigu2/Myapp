import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {
  favourite1:boolean = false;
  favourite2:boolean = false;
  favourite3:boolean = false;
  favourite4:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }

  addFavourite1(){
    this.favourite1 = !this.favourite1;
  }
  addFavourite2(){
    this.favourite2 = !this.favourite2;
  }
  addFavourite3(){
    this.favourite3 = !this.favourite3;
  }
  addFavourite4(){
    this.favourite4 = !this.favourite4;
  }

}
