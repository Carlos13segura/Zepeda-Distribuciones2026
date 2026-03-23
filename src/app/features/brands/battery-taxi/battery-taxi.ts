import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TaxiProduct {
  carouselId: string;
  images: string[];
  model: string;
  cca: string;
  price: string;
  link: string;
}

@Component({
  selector: 'app-battery-taxi',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './battery-taxi.html',
  styleUrls: ['./battery-taxi.scss']
})
export class BatteryTaxiComponent {
  taxiProducts: TaxiProduct[] = [
    {
      carouselId: 'taxi-carousel-1',
      images: [
        'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/taxi-1.png',
        'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/taxi-1-l.png',
        'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/taxi-1-r.png'
      ],
      model: 'LTH TAXI 55',
      cca: '450 CCA',
      price: '$1,800 MXN',
      link: '/producto/taxi-55'
    },
    {
      carouselId: 'taxi-carousel-2',
      images: [
        'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/taxi-2.png',
        'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/taxi-2-l.png'
      ],
      model: 'LTH TAXI 65',
      cca: '600 CCA',
      price: '$2,200 MXN',
      link: '/producto/taxi-65'
    }
  ];

  scrollToProducts(): void {
    const element = document.getElementById('productos');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
