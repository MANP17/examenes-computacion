import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NgModel } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, ImageModule, InputTextModule, FormsModule, ButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  value: string = "";
  items:MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Inicio'
      },
      {
        label: 'Características'
      },
      {
        label: 'Proyectos',
        items: [
          {
            label: 'Desarrollo a la medida'
          },
          {
            label: 'Desarrollo móvil'
          },
          {
            label: 'Soporte de Aplicaciones'
          }
        ]
      },
      {
        label: 'Contacto'
      }
    ]
  }
}
