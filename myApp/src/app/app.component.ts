import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage} from '../pages/home/home'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  session_token:string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage) {
    // console.log(storage.get(this.session_token));
    // console.log(this.file.applicationDirectory);
    //
    // this.file.readAsText("../assets/devices.json")
    // .then(_ => console.log('Directory exists'))
    // .catch(err => console.log('Directory doesn\'t exist'))
  //   var a = this.http.get('assets/user_info.json').map(res => {
  //   console.log(res);
  //   return res.json();
  // });
  // console.log(a);
  
    storage.get(this.session_token).then(data=>
    {
        if(data){
          console.log("The account exist");
          //TODO: check with server iam
          this.rootPage = TabsPage;
        }
        else{
          console.log("The account session_token has expired or does not exist, should go to login page");
          this.rootPage = HomePage;
        }
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
