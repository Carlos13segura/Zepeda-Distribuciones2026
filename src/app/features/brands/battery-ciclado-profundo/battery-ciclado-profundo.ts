import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-battery-ciclado-profundo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './battery-ciclado-profundo.html',
  styleUrls: ['./battery-ciclado-profundo.scss']
})
export class BatteryCicladoProfundoComponent {
  productImages = [
    'https://zepeda-distribuciones.vercel.app/img/ciclado-1.png',
    'https://zepeda-distribuciones.vercel.app/img/ciclado-2.png',
    'https://zepeda-distribuciones.vercel.app/img/ciclado-3.png'
  ];
  
  link = '/lth-domicilio';
  currentSlide = 0;

  prevSlide(): void {
    this.currentSlide = this.currentSlide > 0 
      ? this.currentSlide - 1 
      : this.productImages.length - 1;
  }

  nextSlide(): void {
    this.currentSlide = this.currentSlide < this.productImages.length - 1 
      ? this.currentSlide + 1 
      : 0;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
