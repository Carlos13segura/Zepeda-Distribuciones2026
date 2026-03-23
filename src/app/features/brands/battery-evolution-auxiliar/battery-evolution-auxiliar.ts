import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface AuxiliarProduct {
  images: string[];
  model: string;
  cca: string;
  price: string;
  link: string;
}

@Component({
  selector: 'app-battery-evolution-auxiliar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './battery-evolution-auxiliar.html',
  styleUrls: ['./battery-evolution-auxiliar.scss']
})
export class BatteryEvolutionAuxiliarComponent {
  products: AuxiliarProduct[] = [
    {
      images: [
        'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/evolution-aux.png'
      ],
      model: 'LTH EVOLUTION AUX 40',
      cca: '350 CCA',
      price: '$1,850 MXN',
      link: '/producto/evolution-aux-40'
    }
  ];

  scrollToProducts(): void {
    const element = document.getElementById('productos');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
