import { Component } from '@angular/core';
import { DeezerService } from '../../providers/deezer-service';

@Component({
  selector: 'page-acerca',
  templateUrl: 'acerca.html',
  providers: [DeezerService]
})
export class Acerca {

  public userPlayList: any;

  public titulo = "Acerca de";
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Acerca');
  }

  

}
