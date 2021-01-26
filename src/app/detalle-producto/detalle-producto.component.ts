import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../producto'
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  @Input() producto: Producto | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
