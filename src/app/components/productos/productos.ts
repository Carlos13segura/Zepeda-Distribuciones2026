import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Product {
  title: string;
  description: string;
  image: string;
  route: string;
  icon: string;
  bgText: string;
  darkDescription?: boolean;
  bgImage: string; // Imagen de referencia de fondo
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class ProductosComponent {
  products: Product[] = [
    {
      title: 'Baterías',
      description: 'Todas las baterías LTH se distinguen por su excelente calidad, gran rendimiento, amplia garantía y tecnología de punta.',
      image: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MCJRJKYMXGKBDQTGNETUJK43CSGM?version=1.1&channelId=0apQO0000000Ch7',
      route: '/baterias',
      icon: 'mdi:car-battery',
      bgText: 'BATERIAS',
      bgImage: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MCBXOCCWMIBVAIHO4MBH4IF72KDE?version=1.1&channelId=0apQO0000000Ch8&oid=00DfL000007937e', // Auto
    },
    {
      title: 'Moto-Baterías',
      description: 'Con el respaldo de LTH, nuestras baterías para motocicleta ofrecen la mejor calidad y tecnología. Cumplen con las exigencias de los fabricantes.',
      image: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/new-motorcycle-batteries435789db-6930-4018-9d8e-90cec07fed1b.png?sfvrsn=d0c40882_1',
      route: '/moto-bateria',
      icon: 'mdi:motorbike',
      bgText: 'MOTOS',
      darkDescription: true,
      bgImage: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MC25ZZGEFD2JCWRK7EDN352NCY3Q?version=1.1&channelId=0apQO0000000Ch8&oid=00DfL000007937e' // Moto
    },
    {
      title: 'Lubricantes',
      description: 'LTH ofrece una amplia gama de lubricantes de motor de vanguardia que garantizan la lubricación adecuada.',
      image: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants702377f5-9fa2-4322-80c6-476735abb51d.png?sfvrsn=d0c40882_1',
      route: '/lubricantes',
      icon: 'mdi:oil',
      bgText: 'LUBRICANTES',
      bgImage: 'https://irp.cdn-website.com/81c2d353/MOBILE/jpg/478.jpg',
      //'https://lh4.googleusercontent.com/proxy/miWxNgE1mO2RCn-F7jsI0Zwssnj13QlBhMuAj5ORzqI2rWjapEdAcjQOOTkBeBsB1isSbpLb47gC8w', // Mecánico/Motor
    },
    {
      title: 'Filtros',
      description: 'La línea de filtros LTH ofrece productos de excelente calidad, garantizando una limpieza profunda para un rendimiento óptimo.',
      image: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MCJHLHN2L3NFEX7BVDDUGIUGIJTQ?version=1.1&channelId=0apQO0000000Ch7',
      route: '/filtros',
      icon: 'mdi:filter',
      bgText: 'FILTROS',
      darkDescription: true,
      bgImage: 'https://irp.cdn-website.com/81c2d353/MOBILE/jpg/477.jpg' // Motor/Taller
    },
    {
      title: 'Pilas Alcalinas',
      description: 'Gracias a la experiencia, innovación y tecnología de LTH, ahora también puedes contar con su energía confiable en pilas alcalinas.',
      image: 'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/alkaline-batteries2af99e61-70a1-4c30-a26f-42cbf5d395e8.png?sfvrsn=c98b0882_1',
      route: '/baterias-alcalinas',
      icon: 'mdi:battery-charging',
      bgText: 'ALCALINAS',
      bgImage: 'https://m.media-amazon.com/images/I/711itfMSt+L.jpg' // Electrónica
    }
  ];
}
