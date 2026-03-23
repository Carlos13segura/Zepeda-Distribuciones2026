import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CaleProduct {
  model: string;
  cca: string;
  price: string;
  link: string;
}

@Component({
  selector: 'app-battery-cale',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './battery-cale.html',
  styleUrls: ['./battery-cale.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BatteryCaleComponent {
  automotiveProducts: CaleProduct[] = [
    {
      model: 'LTH CALE 12V',
      cca: '850 CCA',
      price: '$2,800 MXN',
      link: '/producto/cale-12v'
    }
  ];
  
  heavyDutyProducts: CaleProduct[] = [
    {
      model: 'LTH CALE HD 24V',
      cca: '1200 CCA',
      price: '$4,500 MXN',
      link: '/producto/cale-hd-24v'
    }
  ];
  
  solarProducts: CaleProduct[] = [
    {
      model: 'LTH CALE Solar 48V',
      cca: '200 Ah',
      price: '$8,500 MXN',
      link: '/producto/cale-solar-48v'
    }
  ];
  
  scrollToProducts(): void {
    const element = document.getElementById('productos');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
