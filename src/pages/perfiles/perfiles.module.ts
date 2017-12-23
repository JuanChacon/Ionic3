import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Perfiles } from './perfiles';

@NgModule({
  declarations: [
    Perfiles,
  ],
  imports: [
    IonicPageModule.forChild(Perfiles),
  ],
})
export class PerfilesModule {}
