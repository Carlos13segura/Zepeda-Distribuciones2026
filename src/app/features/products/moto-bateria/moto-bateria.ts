import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MotoProduct {
  image: string;
  title: string;
  description: string;
  features: string[];
  link: string;
}

interface WhyChooseFeature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-moto-bateria',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './moto-bateria.html',
  styleUrls: ['./moto-bateria.scss']
})
export class MotoBateriaComponent {
  products: MotoProduct[] = [
    {
      image: 'https://zepeda-distribuciones.vercel.app/img/moto-bateria-convencional.png',
      title: 'Baterías Convencionales',
      description: 'Baterías de ácido-plomo para motos estándar. Confiables y económicas.',
      features: ['6 meses de garantía', 'Mantenimiento periódico', 'Ideal para climas templados'],
      link: '/moto-bateria/convencional'
    },
    {
      image: 'https://zepeda-distribuciones.vercel.app/img/moto-bateria-agm.png',
      title: 'Baterías AGM',
      description: 'Tecnología AGM sin mantenimiento para motos de alta demanda.',
      features: ['Sin mantenimiento', 'Mayor vida útil', 'Resistente a vibraciones'],
      link: '/moto-bateria/agm'
    }
  ];

  whyChooseFeatures: WhyChooseFeature[] = [
    {
      icon: 'bi-shield-check',
      title: 'Garantía Extendida',
      description: 'Hasta 12 meses de garantía en todas nuestras moto baterías.'
    },
    {
      icon: 'bi-lightning-charge',
      title: 'Alto Rendimiento',
      description: 'Potencia de arranque superior para cualquier condición climática.'
    },
    {
      icon: 'bi-tools',
      title: 'Fácil Instalación',
      description: 'Diseño plug-and-play para instalación rápida y sin complicaciones.'
    },
    {
      icon: 'bi-recycle',
      title: 'Reciclaje Gratuito',
      description: 'Recuperamos tu batería vieja sin costo adicional.'
    }
  ];
}
