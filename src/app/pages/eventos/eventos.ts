import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'cally';

interface Evento {
    id: number;
    title: string;
    date: string; // Format YYYY-MM-DD
    description: string;
    image?: string;
    location: string;
}

@Component({
    selector: 'app-eventos',
    standalone: true,
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './eventos.html',
    styleUrls: ['./eventos.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EventosComponent implements OnInit {
    selectedDate: string = '';
    selectedEvents: Evento[] = [];

    isModalOpen = false;

    // Mock Data
    eventos: Evento[] = [
        {
            id: 1,
            title: 'Lanzamiento de Batería AGM',
            date: '2024-05-15',
            description: 'Presentación oficial de la nueva línea de baterías AGM para vehículos de alta gama.',
            location: 'Centro de Convenciones LTH, CDMX',
            image: 'assets/images/evento1.jpg'
        },
        {
            id: 2,
            title: 'Capacitación Técnica: Diagnóstico Eléctrico',
            date: '2024-05-20',
            description: 'Taller práctico sobre diagnóstico de sistemas eléctricos y baterías.',
            location: 'Monterrey, NL'
        },
        {
            id: 3,
            title: 'Expo Mecánico 2024',
            date: '2024-06-10',
            description: 'Visítanos en nuestro stand y conoce las últimas novedades.',
            location: 'Guadalajara, Jal'
        }
    ];

    ngOnInit() {
        // Init logic
    }

    onDateChange(event: any) {
        this.selectedDate = event.target.value;
        this.selectedEvents = this.eventos.filter(e => e.date === this.selectedDate);
        this.isModalOpen = true;
        console.log('Selected date:', this.selectedDate, 'Events:', this.selectedEvents);
    }

    closeModal() {
        this.isModalOpen = false;
    }
}

