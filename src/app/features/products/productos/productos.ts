import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimationService } from '@core/services/animation.service';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.scss']
})
export class ProductosComponent implements AfterViewInit {
  private animationService = inject(AnimationService);

  products = [
    {
      title: 'Baterías Estándar',
      bgText: 'ESTÁNDAR',
      bgImage: 'assets/images/bg-baterias.jpg',
      image: 'assets/images/lth-bateria.png',
      description: 'Potencia confiable para el día a día. Diseño optimizado para máximo rendimiento y durabilidad en condiciones extremas.',
      route: '/baterias',
      darkDescription: false
    },
    {
      title: 'Motobaterías',
      bgText: 'MOTO',
      bgImage: 'assets/images/bg-moto.jpg',
      image: 'assets/images/moto-bateria.png',
      description: 'Arranque seguro en dos ruedas. Alta resistencia a vibraciones para cualquier tipo de motocicleta.',
      route: '/moto-bateria',
      darkDescription: false
    },
    {
      title: 'Lubricantes LTH',
      bgText: 'ACEITE',
      bgImage: 'assets/images/bg-lubricantes.jpg',
      image: 'assets/images/lth-lubricante.png',
      description: 'Protección superior para el motor de tu vehículo con nuestra línea de lubricantes de alta tecnología.',
      route: '/lubricantes',
      darkDescription: false
    },
    {
      title: 'Filtros',
      bgText: 'FILTROS',
      bgImage: 'assets/images/bg-filtros.jpg',
      image: 'assets/images/filtros.png',
      description: 'Máxima purificación para prolongar la vida útil del motor y mejorar la eficiencia de combustible.',
      route: '/filtros',
      darkDescription: false
    }
  ];

  ngAfterViewInit() {
    this.animationService.staggeredEntrance('.product-row', 150);
  }

  onHover(event: MouseEvent, isEntering: boolean) {
    this.animationService.cardHover(event.currentTarget as HTMLElement, isEntering);
  }
}

