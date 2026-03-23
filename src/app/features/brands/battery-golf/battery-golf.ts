import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface GolfProduct {
  image: string;
  model: string;
  voltage: string;
  capacity: string;
  cca: string;
  price: string;
  link: string;
}

@Component({
  selector: 'app-battery-golf',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './battery-golf.html',
  styleUrls: ['./battery-golf.scss']
})
export class BatteryGolfComponent {
  products6V: GolfProduct[] = [
    {
      image: 'https://zepeda-distribuciones.vercel.app/img/golf-6v.png',
      model: 'LTH GOLF 6V 180Ah',
      voltage: '6V',
      capacity: '180 Ah',
      cca: 'N/A (Deep Cycle)',
      price: '$2,100 MXN',
      link: '/producto/golf-6v-180'
    }
  ];

  products8V: GolfProduct[] = [
    {
      image: 'https://zepeda-distribuciones.vercel.app/img/golf-8v.png',
      model: 'LTH GOLF 8V 170Ah',
      voltage: '8V',
      capacity: '170 Ah',
      cca: 'N/A (Deep Cycle)',
      price: '$2,400 MXN',
      link: '/producto/golf-8v-170'
    }
  ];
}
