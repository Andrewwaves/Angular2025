import { Routes } from '@angular/router';
import { ListalibrosComponent } from './listalibros/listalibros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';

export const routes: Routes = [

{path:"listalibros",component:ListalibrosComponent},
{path:"formulariolibros",component:FormularioLibroComponent},
{path:"detallelibro/:isbn",component:DetalleLibroComponent},
{path:"",component:ListalibrosComponent},
];

