import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-battery-marina',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './battery-marina.html',
  styleUrls: ['./battery-marina.scss']
})
export class BatteryMarinaComponent {
  stats = {
    vessels: '500+',
    ports: '50+',
    certification: '100%'
  };

  products = [
    {
      name: 'MARINA 24M',
      model: 'MARINA 24M',
      image: 'https://zepeda-distribuciones.vercel.app/img/marina-24m.png',
      cca: '750 CCA',
      price: '$3,500 MXN',
      link: '/producto/marina-24m',
      isPremium: false,
      categoryIcon: 'bi-anchor',
      category: 'Marina',
      description: 'Batería de alta capacidad para aplicaciones marinas.',
      voltage: '12V',
      capacity: '100Ah',
      warranty: '24 meses'
    }
  ];
}
