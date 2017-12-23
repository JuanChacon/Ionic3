import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Events } from 'ionic-angular/util/events';
@Component({
  selector: 'page-cancion-pop-over',
  templateUrl: 'cancion-pop-over.html',
})
export class CancionPopOver {
  
  public volumen: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl:ViewController, public evs: Events) {

    this.volumen = 100;
  

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionPopOver');
  }

  onRangeChange(event){
  //console.log("boli " + this.volumen);
  this.evs.publish('cambio volumen:', this.volumen);
  }

  close(){
    this.viewCtrl.dismiss();
  }

  
}
