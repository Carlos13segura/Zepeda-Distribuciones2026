import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ConventionalProduct {
  images: string[];
  model: string;
  price: string;
  specs: {
    voltage: string;
    amperage: string;
  };
  features: string[];
  link: string;
}

@Component({
  selector: 'app-convencional',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './convencional.html',
  styleUrls: ['./convencional.scss']
})
export class ConvencionalComponent {
  products: ConventionalProduct[] = [
    {
      images: ['https://zepeda-distribuciones.vercel.app/img/convencional-1.png'],
      model: 'LTH CONVENCIONAL 12N5-3B',
      price: '$650 MXN',
      specs: {
        voltage: '12V',
        amperage: '5Ah'
      },
      features: ['Para motorcycles', 'Garantía 6 meses'],
      link: '/producto/convencional-12n5-3b'
    }
  ];
}
