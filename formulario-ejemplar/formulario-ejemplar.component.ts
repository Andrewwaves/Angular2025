import { Component } from '@angular/core';
import { EjemplarRestService } from '../ejemplar-rest.service';
import { Router } from '@angular/router';
import { Ejemplar } from '../ejemplar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-ejemplar',
  imports: [FormsModule],
  templateUrl: './formulario-ejemplar.component.html',
  styleUrl: './formulario-ejemplar.component.scss'
})
export class FormularioEjemplarComponent {
  ejemplar:Ejemplar={}as Ejemplar;

  constructor(private ejemplarRestService:EjemplarRestService,private router:Router) {
    
  }
  public insertar(){
    this.ejemplarRestService.insertar(this.ejemplar).subscribe((datos)=>{
      console.log("insertado");
      this.router.navigate([""]);
    })
  }

}
