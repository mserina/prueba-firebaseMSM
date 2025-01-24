import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { Articulo } from '../../shared/modelos/articulo';
import { FirestoreService } from '../../servicios/firestore.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  private dataService = inject(FirestoreService);
  private ruta = inject(ActivatedRoute);
  private _snackBar = inject(MatSnackBar);
  private router = inject(Router);

  // ejercicio 2: (en ngOnInit) leer la ruta, y leer el artículo si hay id en la ruta o crear un archivo vacío si no o hay
  articulo: Articulo = { nombre: '', categoria: '', precio: 0 };
  id!: string;

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    if (this.id) {
      // Hay id, leer articulo de la base de datos
      this.dataService.getDocument(`articulos/${this.id}`).subscribe(res => {
        this.articulo = res;
      }  )
    } else {
      // id indefinido, nuevo articulo
      console.log('Nuevo artículo');

    }
  }
  // ejercicio 3: módulo updateArticulo. Deberá utilizar el módulo correspondiente del servicio para actualizar el artículo

  updateArticulo() {
    // Este método va a tomar los datos del formulario y los enviará al servicio para actualiizar el documento
    // console.log(' articulo modificado -> ', this.articulo);
    this.dataService.updateDocument(`articulos/${this.id}`, this.articulo).then(response => {
      console.log('Artículo actualizado correctamente');
      this._snackBar.open('Artículo actualizado correctamente', 'Ok');
      this.router.navigate(['/listado']);
    }  );
    }
  // ejercicio 4: módulo addArticulo. Deberá utilizar el módulo correspondiente del servicio para crear un nuevo documento.

  addArticulo() {

    if(this.articulo.nombre !== '' && this.articulo.categoria !== '' && this.articulo.precio > 0) {
      // Procedo a crear el artículo
      this.dataService.createDocument('articulos', this.articulo).then( response => {
        this._snackBar.open('Artículo creado correctamente', 'Ok');
        this.router.navigate(['/listado']);
      } ).catch (error => {
        this._snackBar.open('No se a creado por algún error', 'Ok')
      })
    } else {
      this._snackBar.open('Debe rellenar el formulario', 'Cerrar');
    }
  }
}
