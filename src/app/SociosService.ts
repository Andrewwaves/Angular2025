import { Injectable } from '@angular/core';
import { Socio } from './socio';

@Injectable({
  providedIn: 'root'
})
export class SociosService {

 listaSocios:Socio[]=[];
 constructor(){
   this.listaSocios.push(new Socio("andrea","canales",24));
   this.listaSocios.push(new Socio("vanesa","santiago",41));
   this.listaSocios.push(new Socio("sara","santiago",39));
 }

 public buscarTodos():Socio[]{
  return this.listaSocios;
 }
}
