import { Routes } from '@angular/router';
import { ListalibrosComponent } from './listalibros/listalibros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { ListaejemplaresComponent } from './listaejemplares/listaejemplares.component';
import { FormularioEjemplarComponent } from './formulario-ejemplar/formulario-ejemplar.component';

export const routes: Routes = [

{path:"listalibros",component:ListalibrosComponent},
{path:"formulariolibros",component:FormularioLibroComponent},
{path:"detallelibro/:isbn",component:DetalleLibroComponent},
{path:"",component:ListaejemplaresComponent},
{path:"formularioejemplares",component:FormularioEjemplarComponent},

];

