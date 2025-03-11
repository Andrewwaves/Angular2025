import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ejemplar } from './ejemplar';

@Injectable({
  providedIn: 'root'
})
export class EjemplarRestService {

  constructor(private httpClient:HttpClient) {

   }
   public buscarTodos():Observable<Ejemplar[]>{
    return this.httpClient.get<Ejemplar[]>("http://localhost:8080/webapi/ejemplares");
    
   }
   public buscarUno(isbn:String,numero:Number):Observable<Ejemplar>{
    return this.httpClient.get<Ejemplar>(`http://localhost:8080/webapi/ejemplares/isbn/${isbn}/numero/${numero}`);
    
   }
   public insertar(ejemplar:Ejemplar):Observable<Ejemplar>{
    return this.httpClient.post<Ejemplar>("http://localhost:8080/webapi/ejemplares",ejemplar);
    
   }
   public borrar(isbn:string,numero:number):Observable<Ejemplar>{
    return this.httpClient.delete<Ejemplar>(`http://localhost:8080/webapi/ejemplares/isbn/${isbn}/numero/${numero}`);
    
   }
}
