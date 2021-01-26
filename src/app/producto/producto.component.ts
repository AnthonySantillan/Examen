import { Component, OnInit } from '@angular/core';
import { Producto} from '../producto'
import { PRODUCTOS } from '../mock-producto'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  selectedProducto: Producto | null = null;
  productos =  PRODUCTOS;

  constructor () { }

  ngOnInit() {
  }

  onSelect(producto:Producto): void {
    this.selectedProducto = producto;
  }


}