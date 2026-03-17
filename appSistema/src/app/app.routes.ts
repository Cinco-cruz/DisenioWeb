import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Acercade } from './pages/acercade/acercade';
import { Cardproductos } from './components/cardproductos/cardproductos';
import { Cardproducto } from './components/cardproducto/cardproducto';
import { Cardbuscador } from './components/cardbuscador/cardbuscador';
import { CardproductoTarjeta } from './components/cardproducto-tarjeta/cardproducto-tarjeta';

export const routes: Routes = [
  { path: 'inicio', component: Inicio },  
  { path: 'acercade', component: Acercade }, 
  { path: 'productos', component: Cardproductos},
  { path: 'producto/:id', component: Cardproducto},
  { path: 'producto/tarjeta', component: CardproductoTarjeta},
  { path: 'buscar/:termino', component: Cardbuscador},
  { path: '**', component: Inicio },
];
