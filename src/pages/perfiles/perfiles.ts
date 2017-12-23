import { PlayList } from './../play-list/play-list';
import { Component } from '@angular/core';
import { DeezerService } from '../../providers/deezer-service';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/merge';


@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  providers: [DeezerService]
})
export class Perfiles {
 /* 
  ngOnInit(){ // este es equivalente al ionViewDidLoad 
    //llamadas azincronas
    
  }
  */

  public userss:any;
  public loading:any;
  constructor(public navCtrl: NavController,
  public navParams:NavParams, public dz:DeezerService, public loadCtrl: LoadingController ) {
  this.userss = [];
  this.loading = this.loadCtrl.create({
    content: "Please wait...",
  });
  
  }

  goToPlaylist(us){
  this.navCtrl.push(PlayList, {us: us});
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad Perfiles');
    this.loading.present();
    //this.loading.dismiss(); // ocultar o eliminar

    this.dz.getProfilesId()
    .subscribe(
      users => {
/*
      users.map(
        userID => {
         this.dz.getUserDetail(userID)
         .subscribe( 
           useer =>{
          //this.userss = useer;
           this.userss.push(useer);
            console.log(this.userss);

           }
         );  
        }
      );
    */
    let sources = users.map(userID=> 
     
      this.dz.getUserDetail(userID));
    Observable.merge(...sources).subscribe(
      data => this.userss.push(data), // datos
      error => console.log(error), // error
      () => this.loading.dismiss() //cuando todo esta  resuelto
    );
      
      });
  }



  

}
