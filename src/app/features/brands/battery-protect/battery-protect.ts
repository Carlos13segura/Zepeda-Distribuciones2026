import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ProtectProduct {
  image: string;
  model: string;
  specs: {
    application: string;
    cca: string;
    warranty: string;
  };
  link: string;
}

@Component({
  selector: 'app-battery-protect',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './battery-protect.html',
  styleUrls: ['./battery-protect.scss']
})
export class BatteryProtectComponent {
  products: ProtectProduct[] = [
    {
      image: 'https://zepeda-distribuciones.vercel.app/img/protect-agm.png',
      model: 'LTH PROTECT AGM 70',
      specs: {
        application: 'Start-Stop / Híbridos',
        cca: '680 CCA',
        warranty: '24 meses'
      },
      link: '/producto/protect-agm-70'
    },
    {
      image: 'https://zepeda-distribuciones.vercel.app/img/protect-agm-85.png',
      model: 'LTH PROTECT AGM 85',
      specs: {
        application: 'Start-Stop Premium',
        cca: '800 CCA',
        warranty: '30 meses'
      },
      link: '/producto/protect-agm-85'
    }
  ];

  scrollToProducts(): void {
    const element = document.getElementById('productos');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
