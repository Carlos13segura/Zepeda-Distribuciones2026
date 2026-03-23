import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  name: string;
  icon: string;
  active: boolean;
}

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-lubricantes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lubricantes.html',
  styleUrls: ['./lubricantes.scss']
})
export class LubricantesComponent {
  categories: Category[] = [
    { name: 'Todos', icon: 'bi-grid-3x3-gap', active: true },
    { name: 'Automóvil', icon: 'bi-car-front', active: false },
    { name: 'Motocicleta', icon: 'bi-bicycle', active: false },
    { name: 'Industrial', icon: 'bi-gear', active: false }
  ];

  private allProducts: Product[] = [
    {
      id: 'L001',
      name: 'LTH MAX 5W-30',
      description: 'Lubricante sintético para motores a gasolina de última generación.',
      category: 'Automóvil',
      image: 'https://zepeda-distribuciones.vercel.app/img/lubricante-1.png'
    },
    {
      id: 'L002',
      name: 'LTH POWER 10W-40',
      description: 'Lubricante semi-sintético para motores de alto rendimiento.',
      category: 'Automóvil',
      image: 'https://zepeda-distribuciones.vercel.app/img/lubricante-2.png'
    },
    {
      id: 'L003',
      name: 'LTH MOTO 4T 20W-50',
      description: 'Lubricante especial para motores de 4 tiempos de motocicletas.',
      category: 'Motocicleta',
      image: 'https://zepeda-distribuciones.vercel.app/img/lubricante-3.png'
    },
    {
      id: 'L004',
      name: 'LTH MOTO 2T',
      description: 'Lubricante para motores de 2 tiempos de alta potencia.',
      category: 'Motocicleta',
      image: 'https://zepeda-distribuciones.vercel.app/img/lubricante-4.png'
    }
  ];

  filteredProducts: Product[] = [...this.allProducts];

  filterByCategory(categoryName: string): void {
    this.categories = this.categories.map(c => ({
      ...c,
      active: c.name === categoryName
    }));

    if (categoryName === 'Todos') {
      this.filteredProducts = [...this.allProducts];
    } else {
      this.filteredProducts = this.allProducts.filter(p => p.category === categoryName);
    }
  }
}
