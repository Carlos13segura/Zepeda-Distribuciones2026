import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface ServiceCenter {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  features: string[];
}

@Component({
  selector: 'app-centros-servicio-resultados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './centros-servicio-resultados.html',
  styleUrls: ['./centros-servicio-resultados.scss']
})
export class CentrosServicioResultadosComponent implements OnInit {
  states: string[] = ['Puebla', 'Tlaxcala', 'Estado de Mexico', 'Ciudad de Mexico', 'Veracruz'];
  cities: string[] = [];
  
  selectedState = '';
  selectedCity = '';
  activeFilter = 'all';
  activeCenterId = 0;
  filteredCenters: ServiceCenter[] = [];
  
  private allCenters: ServiceCenter[] = [
    {
      id: 1,
      name: 'Zepeda Distribuciones Matriz',
      address: 'Olivo 5221, Bosques de Manzanilla',
      city: 'Puebla',
      state: 'Puebla',
      phone: '+52 221 123 4567',
      features: ['24h', 'parking', 'installation']
    },
    {
      id: 2,
      name: 'Zepeda Distribuciones Sur',
      address: 'Av. 11 Sur 3210, Puebla Centro',
      city: 'Puebla',
      state: 'Puebla',
      phone: '+52 221 234 5678',
      features: ['parking', 'installation']
    },
    {
      id: 3,
      name: 'Zepeda Distribuciones Tlaxcala',
      address: 'Av. INSURGENTES 405, Centro',
      city: 'Tlaxcala',
      state: 'Tlaxcala',
      phone: '+52 246 123 4567',
      features: ['24h', 'installation']
    },
    {
      id: 4,
      name: 'Zepeda Distribuciones Toluca',
      address: 'Av. Paseo Tollocan 1234',
      city: 'Toluca',
      state: 'Estado de Mexico',
      phone: '+52 722 123 4567',
      features: ['parking']
    },
    {
      id: 5,
      name: 'Zepeda Distribuciones CDMX Norte',
      address: 'Av. Insurgentes 5000',
      city: 'Ciudad de Mexico',
      state: 'Ciudad de Mexico',
      phone: '+52 55 1234 5678',
      features: ['24h', 'parking', 'installation']
    }
  ];
  
  constructor(private route: ActivatedRoute) {
    this.filteredCenters = [...this.allCenters];
  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['state']) {
        this.selectedState = params['state'];
        this.onStateChange();
      }
      if (params['center']) {
        this.selectedCity = params['center'];
      }
    });
  }
  
  get resultsCount(): number {
    return this.filteredCenters.length;
  }
  
  onStateChange(): void {
    this.cities = [...new Set(
      this.allCenters
        .filter(c => c.state === this.selectedState)
        .map(c => c.city)
    )];
    this.filterCenters();
  }
  
  onCityChange(): void {
    this.filterCenters();
  }
  
  performSearch(): void {
    this.filterCenters();
  }
  
  setActiveCenter(id: number): void {
    this.activeCenterId = id;
  }
  
  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.filterCenters();
  }
  
  useLocation(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          alert('Ubicación obtenida. Mostrando centros cercanos.');
        },
        () => {
          alert('No se pudo obtener la ubicación.');
        }
      );
    }
  }
  
  getDirections(center: ServiceCenter): void {
    const address = encodeURIComponent(`${center.address}, ${center.city}, ${center.state}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  }
  
  private filterCenters(): void {
    let filtered = [...this.allCenters];
    
    if (this.selectedState) {
      filtered = filtered.filter(c => c.state === this.selectedState);
    }
    
    if (this.selectedCity) {
      filtered = filtered.filter(c => c.city === this.selectedCity);
    }
    
    if (this.activeFilter !== 'all') {
      filtered = filtered.filter(c => c.features.includes(this.activeFilter));
    }
    
    this.filteredCenters = filtered;
  }
}
