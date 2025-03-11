import { Component } from '@angular/core';
import { Ejemplar } from '../ejemplar';
import { EjemplarRestService } from '../ejemplar-rest.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listaejemplares',
  imports: [RouterLink],
  templateUrl: './listaejemplares.component.html',
  styleUrl: './listaejemplares.component.scss'
})
export class ListaejemplaresComponent {

listaEjemplares:Ejemplar[]=[];
  constructor (private EjemplarRestService:EjemplarRestService){
    EjemplarRestService.buscarTodos().subscribe( (datos)=> {
  this.listaEjemplares=datos;
})
  }
  borrar(isbn: string, numero: number) {
        this.listaEjemplares = this.listaEjemplares.filter(
          (ejemplar) => ejemplar.isbn !== isbn || ejemplar.numero !== numero
        );
        alert('Ejemplar borrado con éxito');
      }
    }
  
