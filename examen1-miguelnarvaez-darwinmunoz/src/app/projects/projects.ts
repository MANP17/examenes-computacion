import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { Footer } from '../footer/footer';
import { Toaster } from '../toaster/toaster';

@Component({
  selector: 'app-projects',
  imports: [Navbar, CardModule, ButtonModule, AccordionModule, Footer, Toaster],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}
