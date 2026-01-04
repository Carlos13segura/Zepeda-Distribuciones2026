import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-lth-proyect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lth-proyect.html',
  styleUrl: './lth-proyect.scss',
})
export class LthProyectComponent implements AfterViewInit {
  currentSlide = 0;

  slides = [
    {
      title: 'VEHÍCULO APAGADO',
      description: 'Soporta sistemas de seguridad, alarmas y actualizaciones OTA con el motor apagado.',
      image: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/nueva-bateria/slides/car-map1.png?sfvrsn=442a18e_1'
    },
    {
      title: 'ARRANQUE INSTANTÁNEO',
      description: 'Potencia de arranque superior incluso en condiciones de baja carga parcial.',
      image: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/nueva-bateria/slides/car-map2.png?sfvrsn=442a18e_1'
    },
    {
      title: 'EN MARCHA',
      description: 'Recarga eficiente (aceptación de carga superior) para recuperar energía rápidamente.',
      image: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/nueva-bateria/slides/car-map3.png?sfvrsn=442a18e_1'
    }
  ];

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.initHeroAnimations();
    this.initScrollAnimations();
  }

  initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Header Background Zoom
    gsap.to('.gs-header-bg', {
      scale: 1, // Assumes CSS starts at 1.1
      duration: 10,
      ease: 'power1.inOut'
    });

    // Hero Content Stagger
    tl.from('.gs-header-title', { y: -50, opacity: 0, duration: 1 })
      .from('.gs-fade-up', { y: 30, opacity: 0, stagger: 0.2, duration: 0.8 }, '-=0.5')
      .from('.gs-hero-image', { x: 50, opacity: 0, duration: 1 }, '-=0.8')
      .from('.gs-hero-card', { x: 50, opacity: 0, duration: 1 }, '-=0.8');
  }

  initScrollAnimations() {
    // General Sections Fade In
    const sections = this.el.nativeElement.querySelectorAll('.gs-section');
    sections.forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Equipment Items Stagger
    gsap.from('.gs-equip-item', {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.equipment-section',
        start: 'top 70%'
      }
    });

    // Warranty Section Split
    gsap.from('.gs-fade-right', {
      x: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.warranty-section',
        start: 'top 75%'
      }
    });

    gsap.from('.gs-fade-left', {
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.warranty-section',
        start: 'top 75%'
      }
    });

    // Exploded View Labels
    gsap.from('.gs-label', {
      scale: 0,
      opacity: 0,
      stagger: 0.3,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.gs-exploded-view',
        start: 'center 80%'
      }
    });

    // CTA Pulse
    gsap.to('.gs-pulse-btn', {
      scale: 1.05,
      boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)',
      repeat: -1,
      yoyo: true,
      duration: 0.8
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }
}
