import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-home',
  imports: [Navbar, ImageModule, CardModule, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
