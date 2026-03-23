import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ProductImages {
  front: string;
  left: string;
  right: string;
}

interface ProductSpecs {
  cca: string;
  price: string;
}

interface HiTecProduct {
  model: string;
  images: ProductImages;
  specs: ProductSpecs;
  link: string;
}

@Component({
  selector: 'app-hi-tec',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hi-tec.html',
  styleUrls: ['./hi-tec.scss']
})
export class HiTecComponent {
  products: HiTecProduct[] = [
    {
      model: 'HI-TEC 55',
      images: {
        front: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/default-album/hitec-55.png',
        left: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/default-album/hitec-55-l.png',
        right: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/default-album/hitec-55-r.png'
      },
      specs: {
        cca: '450 CCA',
        price: '$1,650 MXN'
      },
      link: '/producto/hi-tec-55'
    },
    {
      model: 'HI-TEC 65',
      images: {
        front: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/default-album/hitec-65.png',
        left: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/default-album/hitec-65-l.png',
        right: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/default-album/hitec-65-r.png'
      },
      specs: {
        cca: '550 CCA',
        price: '$1,950 MXN'
      },
      link: '/producto/hi-tec-65'
    }
  ];

  scrollToProducts(): void {
    const element = document.getElementById('productos');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
