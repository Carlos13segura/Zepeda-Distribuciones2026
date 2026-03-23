import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ProductBadge {
  class: string;
  icon: string;
  text: string;
}

interface ProductSpec {
  cca: string;
  recycle: string;
  price: string;
}

interface LthProduct {
  image: string;
  name: string;
  voltage?: string;
  badges: ProductBadge[];
  specs: ProductSpec;
  link: string;
}

@Component({
  selector: 'app-battery-lth',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './battery-lth.html',
  styleUrls: ['./battery-lth.scss']
})
export class BatteryLthComponent {
  lthProducts: LthProduct[] = [
    {
      image: 'https://zepeda-distribuciones.vercel.app/img/lth-55.png',
      name: 'LTH 55',
      badges: [
        { class: 'bg-primary', icon: 'star-fill', text: 'Popular' }
      ],
      specs: {
        cca: '450 CCA',
        recycle: 'Requerida',
        price: '$1,450 MXN'
      },
      link: '/producto/lth-55'
    },
    {
      image: 'https://zepeda-distribuciones.vercel.app/img/lth-65.png',
      name: 'LTH 65',
      badges: [
        { class: 'bg-success', icon: 'check-circle-fill', text: 'Recomendado' }
      ],
      specs: {
        cca: '550 CCA',
        recycle: 'Requerida',
        price: '$1,750 MXN'
      },
      link: '/producto/lth-65'
    }
  ];

  heavyDuty6V: LthProduct[] = [];
  heavyDuty12V: LthProduct[] = [];
}
