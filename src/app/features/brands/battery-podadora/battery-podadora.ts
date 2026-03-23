import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface PodadoraProduct {
  carouselId: string;
  images: string[];
  model: string;
  voltage: string;
  capacity: string;
  cca: string;
  workTime: string;
  warranty: string;
  price: string;
  link: string;
}

@Component({
  selector: 'app-battery-podadora',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './battery-podadora.html',
  styleUrls: ['./battery-podadora.scss']
})
export class BatteryPodadoraComponent {
  product: PodadoraProduct = {
    carouselId: 'podadora-carousel-1',
    images: [
      'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth-podadora.png',
      'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth-podadora-2.png'
    ],
    model: 'LTH PODADORA U1',
    voltage: '12V',
    capacity: '35 Ah',
    cca: '280 CCA',
    workTime: '2-3 horas',
    warranty: '6 meses',
    price: '$850 MXN',
    link: '/producto/podadora-u1'
  };
}
