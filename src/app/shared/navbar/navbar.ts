import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true, // <- si estás usando componentes standalone
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'] // <- CORREGIDO
})
export class Navbar {
  menuOptions = [
    { label: 'Home', route: '/home' },
    { label: 'Counter', route: '/counter' },
    { label: 'Structural Directives', route: '/structural-directives' },
    { label: 'Attribute Directives', route: '/attribute-directives' },
    { label: 'Data Binding', route: '/data-binding' },
    { label: 'Service', route: '/service' },
    { label: 'Pipes', route: '/pipes' }
  ];
}
