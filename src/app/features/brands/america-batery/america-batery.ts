import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface BatterySpecs {
  cca: string;
  weight: string;
}

interface BatteryProduct {
  name: string;
  image: string;
  specs: BatterySpecs;
  price: string;
  link: string;
}

@Component({
  selector: 'app-america-batery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './america-batery.html',
  styleUrls: ['./america-batery.scss']
})
export class AmericaBateryComponent {
  showAllAutomotive = false;
  
  automotiveProducts: BatteryProduct[] = [
    {
      name: 'América 55',
      image: 'https://bateriasamerica.com/wp-content/uploads/america-55.png',
      specs: { cca: '450 CCA', weight: '12 kg' },
      price: '$1,850 MXN',
      link: '/producto/america-55'
    },
    {
      name: 'América 65',
      image: 'https://bateriasamerica.com/wp-content/uploads/america-65.png',
      specs: { cca: '550 CCA', weight: '14 kg' },
      price: '$2,100 MXN',
      link: '/producto/america-65'
    },
    {
      name: 'América 75',
      image: 'https://bateriasamerica.com/wp-content/uploads/america-75.png',
      specs: { cca: '650 CCA', weight: '16 kg' },
      price: '$2,350 MXN',
      link: '/producto/america-75'
    }
  ];
  
  heavyDutyProducts: BatteryProduct[] = [
    {
      name: 'América HD 100',
      image: 'https://bateriasamerica.com/wp-content/uploads/america-hd-100.png',
      specs: { cca: '900 CCA', weight: '25 kg' },
      price: '$3,500 MXN',
      link: '/producto/america-hd-100'
    }
  ];
  
  get visibleAutomotiveProducts(): BatteryProduct[] {
    return this.showAllAutomotive 
      ? this.automotiveProducts 
      : this.automotiveProducts.slice(0, 2);
  }
  
  toggleAutomotive(): void {
    this.showAllAutomotive = !this.showAllAutomotive;
  }
}
