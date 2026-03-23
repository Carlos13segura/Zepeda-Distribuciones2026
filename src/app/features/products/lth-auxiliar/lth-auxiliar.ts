import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lth-auxiliar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lth-auxiliar.html',
  styleUrls: ['./lth-auxiliar.scss']
})
export class LthAuxiliarComponent {
  currentSlide = 0;
  slides: string[] = [
    'https://zepeda-distribuciones.vercel.app/img/auxiliar-1.png',
    'https://zepeda-distribuciones.vercel.app/img/auxiliar-2.png'
  ];

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

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  startAutoPlay(): void {}
  pauseAutoPlay(): void {}
  onTouchStart(_event: TouchEvent): void {}
  onTouchEnd(_event: TouchEvent): void {}
}
