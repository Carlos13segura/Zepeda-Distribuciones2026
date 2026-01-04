import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-centros',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './centros.html',
  styleUrl: './centros.scss',
})
export class CentrosComponent {
  // Datos de los centros de servicio
  serviceCenters: any = {
    Puebla: [
      { name: "Centro de servicio LTH Izúcar" },
      { name: "CENTRO DE SERVICIO LTH TEHUACAN" },
      { name: "Centro de Servicio LTH Cholula" },
      { name: "Centro de Servicio LTH" },
      { name: "CENTRO DE DISTRIBUCION LTH PUEBLA" },
      { name: "Centro de Servicio LTH Diagnóstico, venta e instalación" },
    ],
    Tlaxcala: [
      { name: "Centro de Servicio LTH Tlaxcala Centro" },
    ],
    Veracruz: [
      { name: "Centro de Servicio LTH Veracruz Puerto" },
    ],
  };

  objectKeys = Object.keys; // Para iterar las llaves en el HTML
  availableCenters: any[] = [];
  selectedState: string = '';
  selectedCenter: string = '';
  locationButtonText: string = 'Utiliza tu ubicación';

  // Manejar cambio de estado
  onStateChange(event: any) {
    this.selectedState = event.target.value;
    this.availableCenters = this.serviceCenters[this.selectedState] || [];
    this.selectedCenter = ''; // Resetear centro seleccionado
  }

  // Manejar cambio de centro
  onCenterChange(event: any) {
    this.selectedCenter = event.target.value;
  }

  // Lógica de geolocalización
  useLocation() {
    if (!navigator.geolocation) {
      alert("Tu navegador no soporta geolocalización.");
      return;
    }

    this.locationButtonText = "Obteniendo ubicación...";
    navigator.geolocation.getCurrentPosition(
      position => {
        // Simulación: elegir siempre Puebla como en el requerimiento
        this.selectedState = "Puebla";
        this.availableCenters = this.serviceCenters['Puebla'];

        if (this.availableCenters.length > 0) {
          this.selectedCenter = this.availableCenters[0].name;
        }

        this.locationButtonText = "Ubicación detectada";
        setTimeout(() => {
          this.locationButtonText = "Utiliza tu ubicación";
        }, 3000);
      },
      () => {
        alert("No se pudo obtener tu ubicación.");
        this.locationButtonText = "Utiliza tu ubicación";
      }
    );
  }

  // Validación de búsqueda
  onSearch(event: Event) {
    if (!this.selectedState || !this.selectedCenter) {
      event.preventDefault();
      alert("Selecciona un estado y un centro antes de continuar.");
    }
  }
}
