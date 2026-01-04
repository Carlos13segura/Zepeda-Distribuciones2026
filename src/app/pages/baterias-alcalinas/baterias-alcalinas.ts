import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
    icon: string;
    title: string;
    description: string;
}

interface Device {
    icon: string;
    name: string;
}

@Component({
    selector: 'app-baterias-alcalinas',
    standalone: true,
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './baterias-alcalinas.html',
    styleUrls: ['./baterias-alcalinas.scss']
})
export class BateriasAlcalinasComponent {

    showBenefits = false;

    benefits: Benefit[] = [
        {
            icon: 'bi-shield-check',
            title: 'Protegen tus equipos',
            description: 'Diseñadas para proteger tus dispositivos electrónicos con energía estable y confiable.'
        },
        {
            icon: 'bi-lightning-charge',
            title: 'Gran desempeño y alto rendimiento',
            description: 'Optimizadas para dispositivos de alto consumo energético.'
        },
        {
            icon: 'bi-battery-full',
            title: 'Hasta 10 veces más duradera',
            description: 'Superan ampliamente a las pilas comunes de zinc-carbón.'
        },
        {
            icon: 'bi-clock-history',
            title: 'Preservan la carga por 10 años',
            description: 'Mantienen su energía almacenada durante una década.'
        }
    ];

    devices: Device[] = [
        { icon: 'bi-music-note-beamed', name: 'Reproductores de música portátiles' },
        { icon: 'bi-flashlight', name: 'Linternas y cámaras fotográficas' },
        { icon: 'bi-smartwatch', name: 'Relojes digitales y analógicos' },
        { icon: 'bi-exclamation-triangle', name: 'Detectores de humo' },
        { icon: 'bi-heart-pulse', name: 'Equipo médico' },
        { icon: 'bi-bell', name: 'Sensores de alarma' }
    ];

    toggleBenefits() {
        this.showBenefits = !this.showBenefits;
    }
}
