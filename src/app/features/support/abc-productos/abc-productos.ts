import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abc-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abc-productos.html',
  styleUrls: ['./abc-productos.scss']
})
export class AbcProductosComponent {
  toggleCollapsible(event: Event) {
    const element = event.currentTarget as HTMLElement;
    element.classList.toggle('active');
    
    // El elemento siguiente es el contenido
    const content = element.nextElementSibling as HTMLElement;
    if (content) {
      if (content.style.maxHeight) {
        content.style.maxHeight = '';
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    }
  }
}
