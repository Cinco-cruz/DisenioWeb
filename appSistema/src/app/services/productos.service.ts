import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.models';
@Injectable({providedIn: 'root'})
export class ProductosService {
    constructor() { 
        console.log("Servicio de productos listo para usar!!!");
    }
    private productos : Producto[] = [
        {nombre: 'Audifonos', img: 'img/audifonos.png', precio: 800},
        {nombre: 'Tenis', img: 'img/Nike-Phantom.png', precio: 500},
        {nombre: 'Roloj', img: 'img/reloj.png', precio: 1000},
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