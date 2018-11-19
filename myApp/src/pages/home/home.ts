import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { MainPage } from '../main/main';
import { Storage } from '@ionic/storage';
import {TabsPage} from '../tabs/tabs'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private session_token:string;
  username:string;
  password:string;
  constructor(public navCtrl: NavController) {
    // this.storage = NavController.get(storage);
  }

  login(){
    //we should set the new session_token that asked from iam
    var getSessionToken = function(username:string , password:string){
      //TODO: after backend has done, should get it from IAM
      if(username == null && password == null){
        return null;
      }
      let fake_username:string = "xinyigu2";
      let fake_password:string = "12345678";
      if(username == fake_username && password == fake_password){
        return "fhuihfuaklhgfula";
      }
      else{
        return null;
      }
    }
    this.session_token = getSessionToken(this.username, this.password);
    console.log("session_token", this.session_token);
    if(this.session_token != null){
      console.log("Go to the main page ");
      //Add to storage
      this.navCtrl.push(TabsPage,{
        session_token: this.session_token
      });
    }
    else{
      console.log("mismatch or not exist");
    }
  }

  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
}
