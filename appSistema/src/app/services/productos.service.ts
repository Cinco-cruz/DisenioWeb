import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.models';
@Injectable({providedIn: 'root'})
export class ProductosService {
    constructor() { 
        console.log("Servicio de productos listo para usar!!!");
    }
    private productos : Producto[] = [
        {nombre: 'Audifonos', img: 'assets/img/coca-cola.jpg', precio: 20},
        {nombre: 'Tenis', img: 'assets/img/pepsi.jpg', precio: 18},
        {nombre: 'Rolej', img: 'assets/img/fanta.jpg', precio: 15},
    ];
    getProductos(): Producto[] {return this.productos;}
    getProducto(id: number) {return this.productos[id];}
    buscarProductos(termino: string): Producto[] {
        let productosArr: Producto[] = [];
        termino = termino.toLowerCase();
        for (let i = 0; i < this.productos.length; i++) {
            let producto = this.productos[i];
            let nombre = producto.nombre.toLowerCase();
            if (nombre.indexOf(termino) >= 0) {
                productosArr.push(producto);
            }
        }
        return productosArr;
    }
}