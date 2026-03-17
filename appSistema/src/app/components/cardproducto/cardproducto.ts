import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-cardproducto',
  imports: [RouterModule],
  templateUrl: './cardproducto.html',
  styleUrls: ['./cardproducto.css']
})
export class Cardproducto implements OnInit {
  producto: any = {};
  constructor(private activatedRoute: ActivatedRoute
    // ) {}
    ,private productosService: ProductosService) { }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '0';

    this.producto = this.productosService.getProducto(parseInt(id));
    console.log(this.producto);
  }
}