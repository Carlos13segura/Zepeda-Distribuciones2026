import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface AGMProduct {
  carouselImages: string[];
  title: string;
  price: string;
  voltage: string;
  amp: string;
  warranty: string;
  application: string;
  technology: string;
  link: string;
}

@Component({
  selector: 'app-agm-libre-mantenimiento',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agm-libre-mantenimiento.html',
  styleUrls: ['./agm-libre-mantenimiento.scss']
})
export class AgmLibreMantenimientoComponent {
  products: AGMProduct[] = [
    {
      carouselImages: ['https://zepeda-distribuciones.vercel.app/img/agm-1.png'],
      title: 'LTH AGM TX7A-BS',
      price: '$1,200 MXN',
      voltage: '12V',
      amp: '6Ah',
      warranty: '12 meses garantía',
      application: 'Motocicletas',
      technology: 'AGM Libre Mantenimiento',
      link: '/producto/agm-tx7a-bs'
    }
  ];
}
