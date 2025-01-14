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

  articulo: Articulo = { nombre: '', categoria: '', precio: 0 };
}
