import { Component } from '@angular/core';
import { MainPage } from '../main/main';
import { MessagesPage } from '../messages/messages';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  public tab1Root: any;
  public tab2Root: any;
  private session_token: string = "fhuihfuaklhgfula";
  constructor() {
    this.tab1Root = MainPage;
    this.tab2Root = MessagesPage;
    console.log(this.session_token);
  }
}
