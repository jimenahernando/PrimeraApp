import { newArray } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
  // arrContacts : any;
  arrTopes: any;

  constructor() {
    // this.arrContacts = new Array(
    //   { nombre: "Graciela Barreira", telefono: "156560081", email: "gracielabarreira@hotmail.com"},
    //   { nombre: "Luis Riera", telefono: "4520593", email:"luisrierawalter@hotmail.com"},
    //   { nombre: "Cecilia Hernando", telefono: "153202323", email: "hernandocecilia@live.com"},
    //   { nombre: "Sebastian croce", telefono: "675482212", email: "sebacroce93@gmail.com"},
    //   { nombre: "Jimena Hernando", telefono: "632439158", email: "jimenahernando@hotmail.com"}
    // );
    
    // para el cronometro
    this.arrTopes = [
      {tope: 9},
      {tope: 3},
      {tope: 7},
    ];
  }

  onTerminaCrono($event: any){
    console.log($event);
  }
}
