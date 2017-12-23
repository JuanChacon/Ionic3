import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayList } from './play-list';

@NgModule({
  declarations: [
    PlayList,
  ],
  imports: [
    IonicPageModule.forChild(PlayList),
  ],
})
export class PlayListModule {}
