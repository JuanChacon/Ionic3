import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class Contacto {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contacto');
  }

  enviar(){
    let alert = this.alerCtrl.create({
      title: 'Contacto!',
      subTitle: 'Tu peticion ah sido enviada exitosamente!',
      buttons: ['OK']
    });
    alert.present(); 
  }

}
