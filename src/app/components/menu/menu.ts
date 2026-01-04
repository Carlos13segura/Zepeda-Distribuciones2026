import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Interfaces para tipar los datos del menú
interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

interface DropdownSection {
  header: string;
  items: DropdownItem[];
}

interface DropdownItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { label: 'Buscar', icon: 'mdi:magnify', route: '/buscar' },
    { label: 'Contáctanos', icon: 'mdi:account', route: '/contacto' },
    { label: 'Productos', icon: 'mdi:briefcase-search', route: '/buscador-de-productos' }
  ];

  menuItemsRight: MenuItem[] = [
    { label: 'Servicio', icon: 'mdi:map-marker-radius', route: '/centros-servicio-resultados' },
    { label: 'A Domicilio', icon: 'mdi:home', route: '/lth-domicilio' },
    { label: 'Eventos', icon: 'mdi:calendar', route: '/eventos' }
  ];

  dropdownSections: DropdownSection[] = [
    {
      header: 'Productos',
      items: [
        { label: 'Baterías', icon: 'mdi:car-battery', route: '/baterias' },
        { label: 'Filtros', icon: 'mdi:filter', route: '/filtros' },
        { label: 'Lubricantes', icon: 'mdi:oil', route: '/lubricantes' },
        { label: 'Moto-Baterías', icon: 'mdi:motorbike', route: '/moto-baterias' },
        { label: 'Baterías Alcalinas', icon: 'mdi:battery-charging', route: '/baterias-alcalinas' }
      ]
    },
    {
      header: 'Baterías Avanzadas',
      items: [
        { label: 'LTH Proyect', icon: 'mdi:shield', route: '/lth-proyect' },
        { label: 'LTH Evolution', icon: 'mdi:star-circle', route: '/lth-evolution' },
        { label: 'Evolution Auxiliar', icon: 'mdi:star', route: '/lth-evolution-auxiliar' }
      ]
    },
    {
      header: 'Tecnología',
      items: [
        { label: 'Tecnología', icon: 'mdi:chip', route: '/tecnologia' }
      ]
    },
    {
      header: 'Ecología',
      items: [
        { label: 'Certificaciones', icon: 'mdi:certificate', route: '/certificaciones' },
        { label: 'Programas', icon: 'mdi:account-group', route: '/programas-responsabilidad' },
        { label: 'Reciclaje', icon: 'mdi:recycle', route: '/reciclaje' }
      ]
    },
    {
      header: 'Soporte',
      items: [
        { label: 'ABC de tus Productos', icon: 'mdi:book-open-page-variant', route: '/abc-de-tus-productos' },
        { label: 'Garantía', icon: 'mdi:shield-check', route: '/garantia' },
        { label: 'Instalación y Reemplazo', icon: 'mdi:cog-sync', route: '/instalacion-reemplazo' },
        { label: 'Mantenimiento', icon: 'mdi:wrench', route: '/mantenimiento' }
      ]
    },
    {
      header: 'Acerca de LTH',
      items: [
        { label: 'La Historia de ZEPEDA Distribuciones', icon: 'mdi:history', route: '/historia' },
        { label: 'Blog', icon: 'mdi:blogger', route: '/blog' }
      ]
    }
  ];

  isMobileMenuOpen = false;
  isDropdownOpen = false;
  logoUrl = 'assets/images/logo.png';
  visibleMobileSections: { [key: string]: boolean } = {};


  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  toggleMobileSection(header: string): void {
    this.visibleMobileSections[header] = !this.visibleMobileSections[header];
  }
}
