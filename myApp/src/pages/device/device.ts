import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
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
  titles:Array<string> = [];
  contents:Array<string> = [];
  favourite:Array<boolean> = [];
  numberList:Array<number> = [];
  deviceId:string;
  public lists:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.deviceId = navParams.data.itemid;
    this.loadData();
  }

  loadData(){
    let url = '../assets/Birds.json';
    console.log("please read");
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result =>{
      this.lists = result;
      console.log(this.lists);
      console.log("deviceid", this.deviceId);
      for(let item of this.lists){
        console.log("itemid", item.id);
        console.log("itemid comparison", item.id == this.deviceId);
        if(item.id == this.deviceId){
          this.titles.push(item.title1);
          this.contents.push(item.content1);
          if(item.favourite1 == "yes"){
            this.favourite.push(true);
          }
          else{this.favourite.push(false);}
          this.numberList.push(0);

          this.titles.push(item.title2);
          this.contents.push(item.content2);
          if(item.favourite2 == "yes"){
            this.favourite.push(true);
          }
          else{this.favourite.push(false);}
          this.numberList.push(1);

          this.titles.push(item.title3);
          this.contents.push(item.content3);
          if(item.favourite3 == "yes"){
            this.favourite.push(true);
          }
          else{this.favourite.push(false);}
          this.numberList.push(2);

          this.titles.push(item.title4);
          this.contents.push(item.content4);
          if(item.favourite4 == "yes"){
            this.favourite.push(true);
          }
          else{this.favourite.push(false);}
          this.numberList.push(3);

          break;
        }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }

  addFavourite(event: Event, id:number){
    event.stopPropagation();
    this.favourite[id] = !this.favourite[id];
  }

}
