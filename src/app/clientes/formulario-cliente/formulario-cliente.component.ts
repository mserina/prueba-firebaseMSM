import { Component, inject } from '@angular/core';
import { FirestoreService } from '../../servicios/firestore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from '../../shared/modelos/cliente';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-formulario-cliente',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './formulario-cliente.component.html',
  styleUrl: './formulario-cliente.component.css'
})
export class FormularioClienteComponent {

  
    private dataService = inject(FirestoreService);
    private ruta = inject(ActivatedRoute);
    private _snackBar = inject(MatSnackBar);
    private router = inject(Router);
  
    cliente: Cliente = { nombre: ''};
    id!: string;
  
    ngOnInit() {

        this.id = this.ruta.snapshot.params['id'];
        
        if (this.id) 
        {
          this.dataService.getDocument(`cliente/${this.id}`).subscribe(respuesta => 
            {
              this.cliente = respuesta;
            } )
        } 
        
        else {

          console.log('Nuevo artículo');
        }
    }
    


    addCliente() {
  
      if(this.cliente.nombre !== '') {
          this.dataService.createDocument('cliente', this.cliente).then( respuesta => {
          this._snackBar.open('Artículo creado correctamente', 'Ok');
          this.router.navigate(['/lista-clientes']);
        } ).catch (error => {
          this._snackBar.open('No se a creado por algún error', 'Ok')
        })
      } 
      
      else {
        this._snackBar.open('Debe rellenar el formulario', 'Cerrar');
      }
    }



    updateArticulo() {
      
        this.dataService.updateDocument(`cliente/${this.id}`, this.cliente).then(respuesta => {
        console.log('Artículo actualizado correctamente');
        this._snackBar.open('Artículo actualizado correctamente', 'Ok');
        this.router.navigate(['/lista-clientes']);
        });
      }


}
