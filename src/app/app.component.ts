import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombre: string = 'fernando herrera';
  valor: number = 1000;
  obj = {
    nombre: 'Fernando'
  }
  constructor(private PrimeNGConfig: PrimeNGConfig){}

  ngOnInit(){
    this.PrimeNGConfig.ripple= true;
  }
  mostrarNombre(){
    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );
  }
}
