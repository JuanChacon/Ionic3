import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Player } from './player';


@NgModule({
  declarations: [
    Player,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Player
  ]
})
export class PlayerModule {}
