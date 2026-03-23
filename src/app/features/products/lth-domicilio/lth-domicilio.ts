import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lth-domicilio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lth-domicilio.html',
  styleUrls: ['./lth-domicilio.scss']
})
export class LthDomicilioComponent {
  mainBenefits = [
    { icon: 'bi-truck', title: 'Envío Gratis', description: 'En tu primera compra', text: 'Sin costo adicional' },
    { icon: 'bi-tools', title: 'Instalación Incluida', description: 'Por técnicos certificados', text: 'Servicio profesional' },
    { icon: 'bi-shield-check', title: 'Garantía Total', description: 'En todas las baterías', text: 'Respaldamos tu compra' }
  ];

  deliveryInfo = [
    { icon: 'bi-clock', title: '60-90 min', text: 'Tiempo de entrega' },
    { icon: 'bi-geo-alt', title: 'Puebla', text: 'Cobertura' },
    { icon: 'bi-telephone', title: '+52 221 123 4567', text: 'Contacto' }
  ];

  scrollToForm(): void {
    const element = document.getElementById('contact-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
