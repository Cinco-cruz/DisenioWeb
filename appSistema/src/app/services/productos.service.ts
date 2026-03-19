import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.models';
@Injectable({providedIn: 'root'})
export class ProductosService {
    constructor() { 
        console.log("Servicio de productos listo para usar!!!");
    }
    private productos : Producto[] = [
        {nombre: 'Audifonos', img: 'img/Nike-Phantom.png', precio: 20},
        {nombre: 'Tenis', img: 'img/Nike-Phantom.png', precio: 18},
        {nombre: 'Rolej', img: 'img/rolej.png', precio: 15},
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