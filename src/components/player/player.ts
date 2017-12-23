import { Component, Input , OnInit } from '@angular/core';
import { Events } from 'ionic-angular/util/events';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'player',
  templateUrl: 'player.html'
})


export class Player implements OnInit, OnDestroy {

  @Input() titulo: string;
  @Input() artista: string;
  @Input() album: string;
  @Input() cover: string;
  @Input() audioSrc: string; 

  public audio: HTMLAudioElement; // any;

  public ready:boolean;

  public playing:boolean;

  public audioPos:number;

  public maxLenghtSong: number;


  

  ngOnInit(){ //diferencia entre constructor y ngOnInit = constr = es como una clase, se ejecuta, se realizan inicializacion sencillas
    // son puras asignaciones de variables
    //ngOnInit, este componente ya esta inicializado, ya podemos hacer uso de los inputs.
    //ionViewDidLoad() se ejecuta despues que el ngOnInit
     
  //console.log( this.titulo);

  this.audio = new Audio();
  this.audio.src = this.audioSrc;
  this.audio.load();
 
  this.audio.oncanplaythrough = () =>{
    this.ready = true;
    this.maxLenghtSong = this.audio.duration;
  
  }; 

  this.audio.onended = () =>{
    this.audioPos = 0 ;
    this.playing = false;
  }

  this.audio.ontimeupdate= (evnt) => {
    //console.log(evnt);
  this.audioPos = this.audio.currentTime;
  };

  this.evs.subscribe('cambio volumen:', (volumen)=> {//console.log("vol",volumen);
  this.audio.volume=volumen/100}); //nombre del evento puesto en el cancionpopover

 
  }



  constructor( public evs: Events) { // no es parte del componente de angular,  se ejecuta antes de que el componente este inicializado
    //console.log(this.text);

    this.ready = false;
    this.playing = false;

    this.audioPos =0;
 
  }

  togglePlay(){
  if(this.playing == false){
  this.audio.play();


  }else{
    
    this.audio.pause();
    
  }
  this. playing = !this. playing;

  }

  ngOnDestroy(){
    this.evs.unsubscribe('cambio volumen:');
    


  }

 

}
