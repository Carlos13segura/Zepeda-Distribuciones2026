import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-baterias-alcalinas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './baterias-alcalinas.html',
  styleUrls: ['./baterias-alcalinas.scss']
})
export class BateriasAlcalinasComponent {
  showBenefits = false;

  benefits = [
    { icon: 'bi-lightning-charge', title: 'Alto Rendimiento' },
    { icon: 'bi-battery-charging', title: 'Larga Duración' },
    { icon: 'bi-shield-check', title: 'Confiable' },
    { icon: 'bi-recycle', title: 'Eco-Friendly' }
  ];

  toggleBenefits(): void {
    this.showBenefits = !this.showBenefits;
  }
}
