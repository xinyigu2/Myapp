import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { MainPage } from '../main/main';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string;
  password:string;
  constructor(public navCtrl: NavController) {

  }
  login(){
    console.log("Username: " + this.username);
    console.log("Password: " + this.password);
    let fake_username:string = "xinyigu2";
    let fake_password:string = "12345678";
    console.log("Finish define the fake info");
    if(this.username == fake_username && this.password == fake_password){
      console.log("Go to the main page ");
      this.navCtrl.push(MainPage,{
        user_name: this.username
      });
        }
    else{
      console.log("mismatch");
    }
    // TODO: check if match

  }

  goRegister(){
    this.navCtrl.push(RegisterPage);
  }


}
