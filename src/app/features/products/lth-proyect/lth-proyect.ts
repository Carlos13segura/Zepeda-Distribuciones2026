import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-lth-proyect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lth-proyect.html',
  styleUrls: ['./lth-proyect.scss']
})
export class LthProyectComponent {
  slides: Slide[] = [
    {
      title: 'Tecnología AGM',
      description: 'Absorción de vidrio mate para máxima durabilidad y rendimiento.',
      image: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/agm-tech.png'
    },
    {
      title: 'Start-Stop',
      description: 'Optimizada para sistemas de arranque automático.',
      image: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/start-stop.png'
    },
    {
      title: 'Resistencia Térmica',
      description: 'Funcionamiento óptimo en temperaturas extremas.',
      image: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/thermal.png'
    }
  ];

  currentSlide = 0;

  prevSlide(): void {
    this.currentSlide = this.currentSlide > 0 
      ? this.currentSlide - 1 
      : this.slides.length - 1;
  }

  nextSlide(): void {
    this.currentSlide = this.currentSlide < this.slides.length - 1 
      ? this.currentSlide + 1 
      : 0;
  }

  setSlide(index: number): void {
    this.currentSlide = index;
  }
}
