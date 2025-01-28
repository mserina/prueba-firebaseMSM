import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FirestoreService } from '../../servicios/firestore.service';
import { MaterialModule } from '../../shared/material/material.module';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [RouterLink, MaterialModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  datosService = inject(FirestoreService);
  articulos: any[] = [];

  ngOnInit(){
    this.datosService.getCollection('articulos').subscribe(res => {
      this.articulos = res;
      console.log(this.articulos);

    });
    
  }

}
