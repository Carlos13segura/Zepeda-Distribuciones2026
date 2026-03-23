import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Evento {
  title: string;
  description: string;
  image?: string;
  location?: string;
}

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventosComponent {
  isModalOpen = signal(false);
  selectedDate = signal<Date>(new Date());
  selectedEvents = signal<Evento[]>([]);

  onDateChange(date: Event): void {
    const d = date instanceof Date ? date : new Date();
    this.selectedDate.set(d);
    this.selectedEvents.set(this.getEventsForDate(d));
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  private getEventsForDate(date: Date): Evento[] {
    const month = date.getMonth();
    const day = date.getDate();

    if (month === 2 && day === 15) {
      return [
        {
          title: 'Capacitación Técnicos',
          description: 'Sesión de capacitación para técnicos sobre nuevas tecnologías de baterías.',
          location: 'Zepeda Distribuciones Matriz',
          image: 'https://zepeda-distribuciones.vercel.app/img/evento-capacitacion.jpg'
        }
      ];
    }

    if (month === 3 && day === 20) {
      return [
        {
          title: 'Lanzamiento Producto Nuevo',
          description: 'Presentación de la nueva línea de baterías LTH Evolution.',
          location: 'Centro de Convenciones Puebla'
        }
      ];
    }

    return [];
  }
}
