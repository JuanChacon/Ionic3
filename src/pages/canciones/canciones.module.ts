import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Canciones } from './canciones';
import { Player } from '../../components/player/player';



@NgModule({
  declarations: [
    Canciones,
    Player,
    
  ],
 
  imports: [
    IonicPageModule.forChild(Canciones),
  ],
})
export class CancionesModule {}
