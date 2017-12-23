import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionPopOver } from './cancion-pop-over';

@NgModule({
  declarations: [
    CancionPopOver,
  ],
  imports: [
    IonicPageModule.forChild(CancionPopOver),
  ],
})
export class CancionPopOverModule {}
