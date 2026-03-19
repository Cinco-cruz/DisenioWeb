import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  buscarProducto(terminos: string) {
    //console.log(terminos);
    this.router.navigateByUrl('/busqueda/' + terminos);
  }
}
