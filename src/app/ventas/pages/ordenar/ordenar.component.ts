import { Component} from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent  {

  enMayusculas: boolean = true;
  ordenarPor: string = '';
  heroes: Heroe[] =[
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]

  cambiarMAYUS_MIN(){
        
    return ( this.enMayusculas == true ) ? this.enMayusculas= false : this.enMayusculas= true;
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
    
  }
}
