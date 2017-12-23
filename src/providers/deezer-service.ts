import { Http } from '@angular/http';


import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DeezerService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeezerService {

  public deezerApi: string;

 

  constructor(public http: Http) {
   // this.deezerApi = "https://api.deezer.com/";
    this.deezerApi = "/deezerAPI/";
   
   // console.log('Hello DeezerService Provider');
  }

  getProfilesId(){
   return this.http.get('https://api.myjson.com/bins/w076v').map( //observable
      res =>
         res.json() // cada objeto(observable) se devuelve como json 
    );
    /*.subscribe(
      users=>{
        console.log("los usuarios" + users);
        users.map( userID =>{
          this.getUserDetail(userID);
          console.log("userID usuarios" + userID);
        });
      },
      error =>{

      }
    );
    */

  }

  getUserDetail(userId){
   return  this.http.get(this.deezerApi+ "user/"+ userId).map( //observable
    res =>
       res.json() // cada objeto(observable) se devuelve como json 
  );
  /*.subscribe(
    data=>{
      console.log(data);
    },
    error =>{

    }
  );
  */
  }

      getUserPlaylist(userId){
        return  this.http.get(this.deezerApi+ "user/"+userId+"/playlists").map( //observable
          res =>
             res.json() // cada objeto(observable) se devuelve como json 
        );  
      }

      getUserSongs(userId){
        return  this.http.get(this.deezerApi+ "playlist/"+userId+"/tracks").map( //observable
          res =>
             res.json() // cada objeto(observable) se devuelve como json 
        );   
      }

}
