import { Routes } from '@angular/router';
import { DetalleComponent } from './articulos/detalle/detalle.component';
import { ListadoComponent } from './articulos/listado/listado.component';
import { FormArticuloComponent } from './articulos/form-articulo/form-articulo.component';
import { ListaServiciosComponent } from './serviciosp/lista-servicios/lista-servicios.component';
import { FormServiciosComponent } from './serviciosp/form-servicios/form-servicios.component';

export const routes: Routes = [
  {path: "", component: ListadoComponent},
  {path: "detalle/:id", component: DetalleComponent},
  {path: "form", component: FormArticuloComponent},
  {path: "form/:id", component: FormArticuloComponent},
  {path: 'lista-servicios', component: ListaServiciosComponent},
  {path: 'new-servicio', component: FormServiciosComponent},
  {path: 'edit-servicio/:id', component: FormServiciosComponent},
  {path: "listado", redirectTo: "/", pathMatch: "full"},
  {path: "**", redirectTo: "/", pathMatch: "full"}
];
