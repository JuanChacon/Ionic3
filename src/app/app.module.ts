import { CancionPopOver } from './../pages/cancion-pop-over/cancion-pop-over';
import { PlayList } from './../pages/play-list/play-list';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Inicio } from '../pages/inicio/inicio';
import { Acerca } from '../pages/acerca/acerca';
import { Contacto } from '../pages/contacto/contacto';
import { Perfiles } from '../pages/perfiles/perfiles';
import { Canciones } from '../pages/canciones/canciones';
import { Player } from '../components/player/player';
import { PerfilDetalle } from '../pages/perfil-detalle/perfil-detalle';

@NgModule({
  declarations: [
    MyApp,
    Inicio,
    Acerca,
    Contacto,
    Perfiles,
    PlayList,
    Canciones,
    Player,
    PerfilDetalle,
    CancionPopOver,
    


  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Inicio,
    Acerca,
    Contacto,
    Perfiles,
    PlayList,
    Canciones,
    PerfilDetalle,
    CancionPopOver,
    
    
    
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
