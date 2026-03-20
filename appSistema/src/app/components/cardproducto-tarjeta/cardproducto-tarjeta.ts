import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cardproducto-tarjeta',
  imports: [],
  templateUrl: './cardproducto-tarjeta.html',
  styleUrls: ['./cardproducto-tarjeta.css'],
})
export class CardproductoTarjeta implements OnInit {
  @Input() producto: any = {};
  @Input() index: number = 0;
  @Output() productoSeleccionado: EventEmitter<number>;
  constructor(private router: Router) {
    this.productoSeleccionado = new EventEmitter();
  }
  
  ngOnInit(): void {

  }

  verProducto() {
    
    this.router.navigate(['/producto', this.index]);
    
  }
}
