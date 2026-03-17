import { Component,   OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-cardbuscador',
  imports: [],
  templateUrl: './cardbuscador.html',
  styleUrls: ['./cardbuscador.css'],
})
export class Cardbuscador implements OnInit {
  productos: any[] = []
  terminos:string = "";
  constructor(private activatedRoute: ActivatedRoute,
             private productosService: ProductosService) {
              }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.terminos = params['terminos'];
      this.productos = this.productosService.buscarProductos (params['terminos']);
      console.log(this.productos);
    });
  }
}
