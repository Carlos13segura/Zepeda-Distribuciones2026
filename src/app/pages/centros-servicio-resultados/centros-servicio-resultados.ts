import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface ServiceCenter {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    phone: string;
    mapUrl: string;
    features: string[];
}

@Component({
    selector: 'app-centros-servicio-resultados',
    standalone: true,
    imports: [CommonModule, FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './centros-servicio-resultados.html',
    styleUrls: ['./centros-servicio-resultados.scss']
})
export class CentrosServicioResultadosComponent implements OnInit {

    selectedState = 'Puebla';
    selectedCity = 'Puebla';
    selectedCenter = '';
    activeCenterId: number | null = null;
    activeFilter = 'all';
    resultsCount = 6;

    serviceCenters: ServiceCenter[] = [
        {
            id: 1,
            name: 'CENTRO DE SERVICIO LTH ABASTOS',
            address: 'Blvd. Norte 2506, La Paz',
            city: 'Puebla',
            state: 'Puebla',
            phone: '222-123-4567',
            mapUrl: 'https://maps.google.com/?q=Centro+Servicio+LTH+Abastos+Puebla',
            features: ['24h', 'parking', 'installation']
        },
        {
            id: 2,
            name: 'Centro de servicio LTH Izúcar',
            address: 'Av. Reforma 123, Centro',
            city: 'Izúcar de Matamoros',
            state: 'Puebla',
            phone: '243-456-7890',
            mapUrl: 'https://maps.google.com/?q=Centro+Servicio+LTH+Izucar',
            features: ['installation']
        },
        {
            id: 3,
            name: 'CENTRO DE SERVICIO LTH TEHUACAN',
            address: 'Calle Independencia 456',
            city: 'Tehuacán',
            state: 'Puebla',
            phone: '238-789-0123',
            mapUrl: 'https://maps.google.com/?q=Centro+Servicio+LTH+Tehuacan',
            features: ['parking', 'installation']
        },
        {
            id: 4,
            name: 'Centro de Servicio LTH Cholula',
            address: 'Portal Guerrero 789',
            city: 'San Pedro Cholula',
            state: 'Puebla',
            phone: '222-234-5678',
            mapUrl: 'https://maps.google.com/?q=Centro+Servicio+LTH+Cholula',
            features: ['installation']
        },
        {
            id: 5,
            name: 'CENTRO DE DISTRIBUCION LTH PUEBLA',
            address: 'Blvd. Atlixcáyotl 1234',
            city: 'Puebla',
            state: 'Puebla',
            phone: '222-345-6789',
            mapUrl: 'https://maps.google.com/?q=Centro+Distribucion+LTH+Puebla',
            features: ['24h', 'parking']
        },
        {
            id: 6,
            name: 'Centro de Servicio LTH Diagnóstico',
            address: 'Av. Juárez 567, Centro',
            city: 'Puebla',
            state: 'Puebla',
            phone: '222-456-7890',
            mapUrl: 'https://maps.google.com/?q=Centro+Servicio+LTH+Diagnostico+Puebla',
            features: ['installation', 'parking']
        }
    ];

    filteredCenters: ServiceCenter[] = [];
    states = ['Puebla', 'Tlaxcala', 'Veracruz', 'México', 'CDMX'];
    cities: string[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        // Obtener parámetros de la ruta si vienen del componente anterior
        this.route.queryParams.subscribe(params => {
            if (params['estado']) {
                this.selectedState = params['estado'];
            }
            if (params['ciudad']) {
                this.selectedCity = params['ciudad'];
            }
        });

        this.updateCities();
        this.filterCenters();
    }

    updateCities(): void {
        // Actualizar ciudades basadas en el estado seleccionado
        const citiesByState: { [key: string]: string[] } = {
            'Puebla': ['Puebla', 'Tehuacán', 'Izúcar de Matamoros', 'San Pedro Cholula'],
            'Tlaxcala': ['Tlaxcala', 'Apizaco', 'Huamantla'],
            'Veracruz': ['Veracruz', 'Xalapa', 'Córdoba'],
            'México': ['Toluca', 'Naucalpan', 'Ecatepec'],
            'CDMX': ['Benito Juárez', 'Coyoacán', 'Miguel Hidalgo']
        };

        this.cities = citiesByState[this.selectedState] || [];
        if (this.cities.length > 0 && !this.cities.includes(this.selectedCity)) {
            this.selectedCity = this.cities[0];
        }
    }

    onStateChange(): void {
        this.updateCities();
        this.filterCenters();
    }

    onCityChange(): void {
        this.filterCenters();
    }

    filterCenters(): void {
        this.filteredCenters = this.serviceCenters.filter(center => {
            const matchesState = center.state === this.selectedState;
            const matchesCity = !this.selectedCity || center.city === this.selectedCity;
            const matchesFilter = this.activeFilter === 'all' || center.features.includes(this.activeFilter);

            return matchesState && matchesCity && matchesFilter;
        });

        this.resultsCount = this.filteredCenters.length;
    }

    setActiveCenter(id: number): void {
        this.activeCenterId = id;
    }

    setFilter(filter: string): void {
        this.activeFilter = filter;
        this.filterCenters();
    }

    getDirections(center: ServiceCenter): void {
        window.open(center.mapUrl, '_blank');
    }

    performSearch(): void {
        this.filterCenters();
    }

    useLocation(): void {
        if (!navigator.geolocation) {
            alert('Tu navegador no soporta geolocalización.');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Simulación: elegir Puebla
                this.selectedState = 'Puebla';
                this.selectedCity = 'Puebla';
                this.updateCities();
                this.filterCenters();
                alert('Ubicación detectada: Puebla, Puebla');
            },
            () => {
                alert('No se pudo obtener tu ubicación.');
            }
        );
    }
}
