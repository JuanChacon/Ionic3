import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'page-perfil-detalle',
  templateUrl: 'perfil-detalle.html',
})
export class PerfilDetalle {
  user:any;
  playlist:any;
  nombre:string;
  totalCanciones:number;

  constructor(public navCtrl: NavController, public navParams: NavParams
  ,public viewCrtl: ViewController) {// ViewController es el ctrl funciones para manipular las vistas
    this.user= this.navParams.get('user');
    this.playlist = this.navParams.get('playlist');
    this.nombre = this.navParams.get('nombre');
    //console.log("user:" + this.user,this.playlist);
    this.totalCanciones = 0;
    this.playlist.map(playlist => this.totalCanciones += playlist.nb_tracks);
    console.log(this.totalCanciones);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilDetalle');

  }

  close(){
  this.viewCrtl.dismiss({ retornar:"parametros padre"}); //mandar informacion
  }

}
