import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto.models';
import { ProductosService } from '../../services/productos.service';
import { CardproductoTarjeta } from "../cardproducto-tarjeta/cardproducto-tarjeta";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardproductos',
  imports: [CardproductoTarjeta, CommonModule],
  templateUrl: './cardproductos.html',
  styleUrls: ['./cardproductos.css'],
})
export class Cardproductos implements OnInit {
  productos: Producto[] = [];
  constructor(private productosService: ProductosService, 
              private router: Router
  ) {  //console.log("constructor");
    
   }
  ngOnInit() {
    //console.log("ngOnInit");
    this.productos = this.productosService.getProductos();
  }
  verProducto(idx: number) {
    this.router.navigate(['/producto', idx]);
  }
}
