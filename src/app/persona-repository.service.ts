import { Injectable } from '@angular/core';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaRepositoryService {

  listaPersonas:Persona[]=[];
  
  constructor() { 
    this.listaPersonas.push(new Persona("Vanesa","Santiago",41));
    this.listaPersonas.push(new Persona("Javier","Gomez",28));
    this.listaPersonas.push(new Persona("Sara","Santiago",39));
  }

  public buscarTodos():Persona[]{
    return this.listaPersonas;
  }
  public insertar(persona:Persona):void{
    this.listaPersonas.push(persona);
  }

  public filtrarNombre(nombre:string):Persona[]{
    return this.listaPersonas.filter((p)=>p.nombre.startsWith(nombre));
  }

  public borrar(nombre:string){
    //this.listaPersonas.filter((p)=>!p.nombre.startsWith(nombre));
    let indice=this.listaPersonas.findIndex((p)=>p.nombre==nombre);
    this.listaPersonas.splice(indice,1);
  }
}
