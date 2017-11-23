import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Acerca } from './acerca';

@NgModule({
  declarations: [
    Acerca,
  ],
  imports: [
    IonicPageModule.forChild(Acerca),
  ],
})
export class AcercaModule {}
