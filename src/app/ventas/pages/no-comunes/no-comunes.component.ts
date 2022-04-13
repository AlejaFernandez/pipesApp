import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {

  nombre: string = 'fernando';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  clientes: string []= ['Maria','Josefa','Pepito','Pepito','Pepito','Pepito','Pepito'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }
  cambiarClientes(){
    this.nombre = 'Maria';
    this.genero = 'femenino'
    console.log(this.nombre);

  }
  borrarCliente(){
    
    this.clientes.pop()

  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad:35,
    direccion: 'Ottawaa, Canadá'
  }
  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela:true
    },
    {
      nombre: 'Robin',
      vuela:false
    },
    {
      nombre: 'Superman',
      vuela:true
    }

  ]

  //Async Pipe
  miObservable = interval(2000); //0,1,2,3,4,5,6,7,8,9

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa');
    }, 3500);
  });
}
