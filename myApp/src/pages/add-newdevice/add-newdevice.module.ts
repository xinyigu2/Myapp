import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewdevicePage } from './add-newdevice';

@NgModule({
  declarations: [
    AddNewdevicePage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewdevicePage),
  ],
})
export class AddNewdevicePageModule {}
