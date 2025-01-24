import { Component, inject } from '@angular/core';
import { FirestoreService } from '../../servicios/firestore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Serviciosp } from '../../shared/modelos/serviciosp';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-lista-servicios',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './lista-servicios.component.html',
  styleUrl: './lista-servicios.component.css'
})
export class ListaServiciosComponent {

  // Proveedores
  private afs = inject(FirestoreService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private _snackBar = inject(MatSnackBar);

  // Propiedades
  id: string = '';
  servicios: Serviciosp[] = [];
  msg: string = 'Mensaje de prueba';

  // Métodos
  ngOnInit() {

      this.afs.getCollection(`serviciosp`).subscribe((response) => {
        this.servicios = response;
        this.msg = 'Servicios cargado correctamente';
        this._snackBar.open(this.msg)._dismissAfter(2000);
      });

  }
}
