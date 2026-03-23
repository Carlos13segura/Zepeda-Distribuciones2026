import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface EvolutionProduct {
  images: string[];
  model: string;
  cca: string;
  tech: string;
  price: string;
  link: string;
}

@Component({
  selector: 'app-battery-evolution',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './battery-evolution.html',
  styleUrls: ['./battery-evolution.scss']
})
export class BatteryEvolutionComponent {
  products: EvolutionProduct[] = [
    {
      images: [
        'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/evolution-70.png',
        'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/evolution-70-l.png'
      ],
      model: 'LTH EVOLUTION 70',
      cca: '680 CCA',
      tech: 'AGM Placa Plana',
      price: '$2,850 MXN',
      link: '/producto/evolution-70'
    }
  ];

  heavyDutyProducts: EvolutionProduct[] = [
    {
      images: [
        'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/evolution-hd.png'
      ],
      model: 'LTH EVOLUTION HD 100',
      cca: '900 CCA',
      tech: 'AGM Heavy Duty',
      price: '$4,200 MXN',
      link: '/producto/evolution-hd-100'
    }
  ];

  scrollToProducts(): void {
    const element = document.getElementById('productos');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
