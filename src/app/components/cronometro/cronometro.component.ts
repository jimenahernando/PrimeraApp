import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  // @Input() contador: number;
  @Input('inicio') contador: number;

  //1 - definicion del output
  @Output() terminaCrono: EventEmitter<string>

  estado: boolean;
  textoBoton: String;

  constructor() { 
    this.contador = 10;
    this.estado = false;
    this.textoBoton = 'INICIAR';
    
    //2- Inicializamos el emmiter
    this.terminaCrono = new EventEmitter();
  }

  ngOnInit(): void {
  }

  iniciarContador(event: any): void{
    // cambio el valor por el contrario
    this.estado = !this.estado;
    this.textoBoton = this.estado === false ? 'INICIAR' : 'PARAR';
    const intervalo = setInterval(() => {
      if (this.estado === false){
        clearInterval(intervalo);
        return;
      }
      this.contador--;  
      if(this.contador === 0) {
          clearInterval(intervalo);
          //3 - emito la informacion al padre
          this.terminaCrono.emit(`El cronometro ha terminado`);
      }
    } , 1000);
  }

}

/* FUNCIONES INTERVALICAS: func que nos permiten crear laspsos de tiempo de forma autonoma
* setInterval(callback, time) -> se repite cada x milisegundos
* setTimeOut(callback, time) -> solo espera x milisegundas y acciona una sola vez el callback
*/