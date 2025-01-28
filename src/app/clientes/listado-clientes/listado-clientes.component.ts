import { Component, inject } from '@angular/core';
import { FirestoreService } from '../../servicios/firestore.service';
import { MaterialModule } from '../../shared/material/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {

  datosService = inject(FirestoreService);
  cliente: any[] = [];

  ngOnInit(){
    this.datosService.getCollection('cliente').subscribe(respuesta => {
      this.cliente = respuesta;
      console.log(this.cliente);

    });
    
  }
}
