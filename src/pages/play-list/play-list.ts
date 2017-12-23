import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Canciones } from './../canciones/canciones';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Component } from '@angular/core';
import { DeezerService } from '../../providers/deezer-service';
import { ModalController } from 'ionic-angular';
import { PerfilDetalle } from '../perfil-detalle/perfil-detalle';

@Component({
  selector: 'page-play-list',
  templateUrl: 'play-list.html',
  providers: [ DeezerService ]
})
export class PlayList {

  public userId:number;

  public nombre: string;

  public user: any;

  public playlists: any;

  public deezerServicePlaylist: DeezerService;

  public loading:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dezzerPlaylist: DeezerService,
    public loadCtrl: LoadingController, public modalCtrl: ModalController) {

    this.user = this.navParams.get('us');
    this.userId = this.user.id;
    console.log("numero id: " + this.userId);
    this.playlists = [];
    console.log("usu     ID"+this.user);

    this.nombre = "Bienvenido Amigo";

    
  }

  goToCanciones(playlist){
  this.navCtrl.push(Canciones, {playlist: playlist});
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PlayList');
    let loader  = this.loadCtrl.create({
      content: "Please wait...",
    });

    loader.present();

    console.log(this.user.id);
    this.dezzerPlaylist.getUserPlaylist(this.userId)
    .subscribe(
      pl => {this.playlists = pl.data;
        console.log(this.playlists);}
    
    );

    loader.dismiss();
  }

  gotoProfile(user, playlists){
    let modal = this.modalCtrl.create(PerfilDetalle,{
      user: user, //datos a enviar al modal
      playlist:playlists,
      nombre:this.nombre
    });

    modal.present();
    modal.onDidDismiss(data => console.log(data));
  }

  

}
