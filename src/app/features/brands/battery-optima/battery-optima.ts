import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-battery-optima',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './battery-optima.html',
  styleUrls: ['./battery-optima.scss']
})
export class BatteryOptimaComponent {
  optimaProducts = [
    {
      name: 'Optima RedTop',
      title: 'Optima RedTop',
      image: 'https://zepeda-distribuciones.vercel.app/img/optima-redtop.png',
      cca: '800 CCA',
      price: '$3,200 MXN',
      link: '/producto/optima-redtop',
      description: 'Batería de alta potencia para arranque de motores.',
      badgeClass: 'badge-primary',
      badge: 'Best Seller',
      features: [
        { icon: 'bi-lightning-fill', text: '800 CCA' },
        { icon: 'bi-shield-check', text: 'Garantía 24 meses' }
      ]
    }
  ];

  scrollToCatalog(): void {
    const element = document.getElementById('catalog');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
