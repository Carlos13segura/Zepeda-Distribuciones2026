import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../icon/icon.component';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './menu.html',

  styleUrls: ['./menu.scss']
})
export class MenuComponent {
  isDropdownOpen = false;
  isMobileMenuOpen = false;
  visibleMobileSections: { [key: string]: boolean } = {};

  menuItems = [
    { label: 'Productos', icon: 'mdi:battery', route: '/baterias' },
    { label: 'Soporte', icon: 'mdi:help-circle', route: '/abc-de-tus-productos' }
  ];

  menuItemsRight = [
    { label: 'Contacto', icon: 'mdi:phone', route: '/contacto' },
    { label: 'Carrito', icon: 'mdi:cart', route: '/pagar' }
  ];

  dropdownSections = [
    {
      header: 'Empresa',
      items: [
        { label: 'Historia', icon: 'mdi:history', route: '/historia' },
        { label: 'Acerca de', icon: 'mdi:information', route: '/acerca-de' }
      ]
    }
  ];

  toggleDropdown() { this.isDropdownOpen = !this.isDropdownOpen; }
  closeDropdown() { this.isDropdownOpen = false; }
  toggleMobileMenu() { this.isMobileMenuOpen = !this.isMobileMenuOpen; }
  closeMobileMenu() { this.isMobileMenuOpen = false; }
  toggleMobileSection(header: string) {
    this.visibleMobileSections[header] = !this.visibleMobileSections[header];
  }
}
