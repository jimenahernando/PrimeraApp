import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'restar',
  templateUrl: './restar.component.html',
  styleUrls: ['./restar.component.css']
})
export class RestarComponent implements OnInit {

  @Input() num1: number;
  @Input() num2: number;
  // resultado: number;
  mensaje: string;
  
  constructor() { 
    this.num1 = 3;
    this.num2 = 7;
    console.log('constructor', this.num1, this.num2);
    // this.resultado = 0;
    this.mensaje = '';
  }
  ngOnInit(): void {
    console.log('ngOnInit', this.num1, this.num2);
  }
  
  devolverResultado(event: any): void {
    let resultado = this.num1 - this.num2;
    console.log(event.target);
    console.log(event.target.innerText);
    console.log(event.target.id);
    console.log(event.target.dataset);
    console.log(event.target.dataset.mensaje);
    console.log(event.target.dataset.fecha);
    this.mensaje = `${event.target.dataset.mensaje} es: ${resultado}`;
  }

}
function input() {
  throw new Error('Function not implemented.');
}

