import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface BatteryProduct {
  image: string;
  name: string;
  description: string;
  features: string[];
  link: string;
}

interface ProductsData {
  automotive: BatteryProduct[];
  heavyDuty: BatteryProduct[];
  special: BatteryProduct[];
}

@Component({
  selector: 'app-baterias',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './baterias.html',
  styleUrls: ['./baterias.scss']
})
export class BateriasComponent {
  productsData: ProductsData = {
    automotive: [
      {
        image: 'https://zepeda-distribuciones.vercel.app/img/lth-55.png',
        name: 'LTH 55',
        description: 'Batería convencional para vehículos con equipamiento estándar.',
        features: ['450 CCA', '12 meses garantía'],
        link: '/app-battery-lth'
      },
      {
        image: 'https://zepeda-distribuciones.vercel.app/img/lth-65.png',
        name: 'LTH 65',
        description: 'Mayor potencia para vehículos con mayor demanda eléctrica.',
        features: ['550 CCA', '18 meses garantía'],
        link: '/app-battery-lth'
      }
    ],
    heavyDuty: [
      {
        image: 'https://zepeda-distribuciones.vercel.app/img/heavy-duty-100.png',
        name: 'LTH Heavy Duty 100',
        description: 'Para vehículos de servicio pesado y comerciales.',
        features: ['950 CCA', '24 meses garantía'],
        link: '/app-battery-heavy-duty'
      }
    ],
    special: [
      {
        image: 'https://zepeda-distribuciones.vercel.app/img/marina-24m.png',
        name: 'LTH Marina',
        description: 'Para aplicaciones marinas y navegación.',
        features: ['Resistente a corrosión', 'Agua salada'],
        link: '/app-battery-marina'
      }
    ]
  };
}
