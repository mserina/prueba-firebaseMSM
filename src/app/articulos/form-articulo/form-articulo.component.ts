import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { Articulo } from '../../modelos/articulo';

@Component({
  selector: 'app-form-articulo',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './form-articulo.component.html',
  styleUrl: './form-articulo.component.css'
})
export class FormArticuloComponent {
  // Lo que tenemos que hacer es lo siguiente:
  // Si en la ruta recibo un parámetro id entonces busco el documento en la base de datos
  // lo muestro en el formulario y habilito el botón de actualizar (preferiblemente si hay cambios)
  // y llamo a actualizar el documento
  // En caso contrario estoy creando un nuevo documento, el articulo estará vacío y
  // al hacer clic en enviar, se guardará en la base de datos como un nuevo documento

  // ejericio 1: inyecta el servicio FirestoreService

  // ejercicio 2: (en ngOnInit) leer la ruta, y leer el artículo si hay id en la ruta o crear un archivo vacío si no o hay
  articulo: Articulo = { nombre: '', categoria: '', precio: 0 };

  // ejercicio 3: módulo updateArticulo. Deberá utilizar el módulo correspondiente del servicio para actualizar el artículo

  // ejercicio 4: módulo addArticulo. Deberá utilizar el módulo correspondiente del servicio para crear un nuevo documento.
  
}
