import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface ServiceCenter {
  name: string;
  address: string;
  phone: string;
}

@Component({
  selector: 'app-centros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './centros.html',
  styleUrls: ['./centros.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CentrosComponent {
  serviceCenters: Record<string, ServiceCenter[]> = {
    'Puebla': [
      { name: 'Zepeda Distribuciones Matriz', address: 'Olivo 5221, Bosques de Manzanilla, Puebla', phone: '+52 221 123 4567' },
      { name: 'Zepeda Distribuciones Sur', address: 'Av. 11 Sur 3210, Puebla Centro', phone: '+52 221 234 5678' }
    ],
    'Tlaxcala': [
      { name: 'Zepeda Distribuciones Tlaxcala', address: 'Av. INSURGENTES 405, Tlaxcala', phone: '+52 246 123 4567' }
    ],
    'Estado de Mexico': [
      { name: 'Zepeda Distribuciones Toluca', address: 'Av. Paseo Tollocan 1234, Toluca', phone: '+52 722 123 4567' }
    ]
  };
  
  selectedState = signal<string>('');
  selectedCenter = signal<string>('');
  locationButtonText = 'Usar mi ubicación';
  
  constructor(private router: Router) {}
  
  objectKeys(obj: Record<string, any>): string[] {
    return Object.keys(obj);
  }
  
  get availableCenters(): ServiceCenter[] {
    const state = this.selectedState();
    return state ? (this.serviceCenters[state] || []) : [];
  }
  
  useLocation(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          this.locationButtonText = 'Ubicación obtenida';
        },
        () => {
          this.locationButtonText = 'No se pudo obtener ubicación';
        }
      );
    } else {
      this.locationButtonText = 'Geolocalización no disponible';
    }
  }
  
  onStateChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedState.set(select.value);
    this.selectedCenter.set('');
  }
  
  onCenterChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedCenter.set(select.value);
  }
  
  onSearch(event: Event): void {
    event.preventDefault();
    const state = this.selectedState();
    const center = this.selectedCenter();
    if (state && center) {
      this.router.navigate(['/centros-servicio-resultados'], { 
        queryParams: { state, center } 
      });
    } else {
      this.router.navigate(['/centros-servicio-resultados']);
    }
  }
}
