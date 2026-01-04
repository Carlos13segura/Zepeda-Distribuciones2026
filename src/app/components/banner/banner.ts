import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class BannerComponent {
  @Input() title: string = 'Las Mejores Baterías las encuentras aquí...';
  @Input() subtitle: string = '"Potencia y durabilidad en todos nuestros Productos"';
  @Input() buttonText: string = 'Ver Productos';
  @Input() buttonLink: string = 'app-productos';
  @Input() backgroundImage: string = 'assets/img/AnyConv.com__imagen-fondo.webp';

  constructor(private router: Router) { }

  navigateOrScroll(event: MouseEvent): void {
    this.createRipple(event);

    // Si es un selector de componente (empieza con app-) o un ID (empieza con #)
    if (this.buttonLink.startsWith('app-') || this.buttonLink.startsWith('#')) {
      const element = document.querySelector(this.buttonLink) || document.getElementById(this.buttonLink.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    // Si no se encontró el elemento o no es un selector, intentar navegar
    if (this.buttonLink) {
      this.router.navigate([this.buttonLink]);
    }
  }

  // Método para manejar el efecto ripple
  createRipple(event: MouseEvent): void {
    const button = event.currentTarget as HTMLElement;
    const ripple = button.querySelector('.ripple-container') as HTMLElement;

    if (ripple) {
      // Remover animación anterior si existe
      ripple.classList.remove('ripple-active');

      // Forzar reflow para reiniciar la animación
      void ripple.offsetWidth;

      // Agregar clase para activar animación
      ripple.classList.add('ripple-active');

      // Remover clase después de la animación
      setTimeout(() => {
        ripple.classList.remove('ripple-active');
      }, 600);
    }
  }
}
