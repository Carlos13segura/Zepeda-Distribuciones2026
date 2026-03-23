import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filtros.html',
  styleUrls: ['./filtros.scss']
})
export class FiltrosComponent {
  filters = [
    { id: '01', name: 'Filtro de Aire', icon: 'bi-wind', image: 'https://zepeda-distribuciones.vercel.app/img/filtro-aire.jpg', description: 'Filtros de aire de alta calidad para máxima eficiencia del motor.', active: false },
    { id: '02', name: 'Filtro de Aceite', icon: 'bi-droplet-half', image: 'https://zepeda-distribuciones.vercel.app/img/filtro-aceite.jpg', description: 'Protección óptima para su motor con filtración superior.', active: false },
    { id: '03', name: 'Filtro de Combustible', icon: 'bi-fuel-pump', image: 'https://zepeda-distribuciones.vercel.app/img/filtro-combustible.jpg', description: 'Combustible limpio para un mejor rendimiento.', active: false },
    { id: '04', name: 'Todos', icon: 'bi-funnel', image: 'https://zepeda-distribuciones.vercel.app/img/filtros-general.jpg', description: 'Descubre toda la línea de filtros LTH.', active: true }
  ];
}
