import { Routes } from '@angular/router';
import { Cardproductos } from './components/cardproductos/cardproductos';
import { Cardproducto } from './components/cardproducto/cardproducto';
import { CardproductoTarjeta } from './components/cardproducto-tarjeta/cardproducto-tarjeta';

export const routes: Routes = [
 
  { path: 'productos', component: Cardproductos},
  { path: 'producto/:id', component: Cardproducto},
  { path: 'producto/tarjeta', component: CardproductoTarjeta},
  { path: '**', component: Cardproductos },
];
