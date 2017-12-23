import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Component } from '@angular/core';
import { DeezerService } from '../../providers/deezer-service';
import { Player} from '../../components/player/player';
import { CancionPopOver } from '../cancion-pop-over/cancion-pop-over';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';


@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
  providers: [DeezerService,Player]
})
export class Canciones {

  public songs: any;

  public pl: any;

  public loading:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public dz: DeezerService
  , public pla: Player,  public loadCtrl: LoadingController, public popOverCtrl: PopoverController) {
   this.pl =  this.navParams.get("playlist");
  // console.log("play " + this.pl);
    this.songs = [];
  }

  ionViewDidLoad() {
    let loader = this.loadCtrl.create({
      content: "Please wait..."
    })
    loader.present();
    console.log('ionViewDidLoad Canciones');
    this.dz.getUserSongs(this.pl.id)
    .subscribe( songs =>{
      console.log(songs);
      this.songs = songs.data;
      loader.dismiss();
    });
    
  }

  ionViewWillLeave(){
}

openCancionPopOver(event){
let popover = this.popOverCtrl.create(CancionPopOver); 
popover.present({ev: event});
//popover.onDidDismiss(); en este metodo se recibira la informacion enviada desde el controlador del popover en este caso
//del CancionPopOver   
}

}
