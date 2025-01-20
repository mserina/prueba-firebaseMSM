import { Routes } from '@angular/router';
import { DetalleComponent } from './articulos/detalle/detalle.component';
import { ListadoComponent } from './articulos/listado/listado.component';
import { FormArticuloComponent } from './articulos/form-articulo/form-articulo.component';

export const routes: Routes = [
  {path: "", component: ListadoComponent},
  {path: "detalle/:id", component: DetalleComponent},
  {path: "form", component: FormArticuloComponent},
  {path: "form/:id", component: FormArticuloComponent},
  {path: "listado", redirectTo: "/", pathMatch: "full"}
];
