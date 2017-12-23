import { Component, ViewChild } from '@angular/core';
import { Platform , Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';//ionic 3
import { SplashScreen } from '@ionic-native/splash-screen';// ionic 3

import { Inicio } from '../pages/inicio/inicio';
import { Perfiles } from '../pages/perfiles/perfiles';
import { Contacto } from '../pages/contacto/contacto';
import { Acerca } from '../pages/acerca/acerca';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') nav: Nav; //nav es la variable de tipo Nav
  public rootPage:any;

  public pages: Array<{titulo: string, component: any, icon:string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) { //statusBar: StatusBar, splashScreen: SplashScreen = ionic 3
    platform.ready().then(() => { //plataforma lista 
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.rootPage = Inicio;
    this.pages= [{titulo: 'Inicio',component: Inicio, icon: 'ios-home'},
    {titulo: 'Perfiles Drezzer',component: Perfiles, icon: 'md-person'},
    {titulo: 'Contactos',component: Contacto, icon: 'ios-mail'},
    {titulo: 'acerca',component: Acerca, icon: 'md-information-circle'}];
  }

goToPage(page){
  this.nav.setRoot(page);
}
}

