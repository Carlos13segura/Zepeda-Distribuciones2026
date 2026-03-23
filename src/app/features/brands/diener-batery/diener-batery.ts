import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface DienerProduct {
  model: string;
  image: string;
  specs: {
    cca: string;
    warranty: string;
    service: string;
    price: string;
  };
  link: string;
}

@Component({
  selector: 'app-diener-batery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './diener-batery.html',
  styleUrls: ['./diener-batery.scss']
})
export class DienerBateryComponent {
  products: DienerProduct[] = [
    {
      model: 'DIENER 55',
      image: 'https://zepeda-distribuciones.vercel.app/img/diener-55.png',
      specs: {
        cca: '450 CCA',
        warranty: '12 meses',
        service: '24/7',
        price: '$1,450 MXN'
      },
      link: '/producto/diener-55'
    },
    {
      model: 'DIENER 65',
      image: 'https://zepeda-distribuciones.vercel.app/img/diener-65.png',
      specs: {
        cca: '550 CCA',
        warranty: '18 meses',
        service: '24/7',
        price: '$1,750 MXN'
      },
      link: '/producto/diener-65'
    }
  ];
}
