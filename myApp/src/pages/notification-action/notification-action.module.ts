import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationActionPage } from './notification-action';

@NgModule({
  declarations: [
    NotificationActionPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationActionPage),
  ],
})
export class NotificationActionPageModule {}
