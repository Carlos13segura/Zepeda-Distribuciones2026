import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface HeavyDutyProduct {
  carouselId: string;
  images: string[];
  model: string;
  cca: string;
  price: string;
  link: string;
}

@Component({
  selector: 'app-battery-heavy-duty',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './battery-heavy-duty.html',
  styleUrls: ['./battery-heavy-duty.scss']
})
export class BatteryHeavyDutyComponent {
  heavyDutyProducts: HeavyDutyProduct[] = [
    {
      carouselId: 'hd-carousel-1',
      images: [
        'https://zepeda-distribuciones.vercel.app/img/heavy-duty-1.png',
        'https://zepeda-distribuciones.vercel.app/img/heavy-duty-1-l.png'
      ],
      model: 'LTH HEAVY DUTY 100',
      cca: '950 CCA',
      price: '$4,500 MXN',
      link: '/producto/heavy-duty-100'
    }
  ];
}
