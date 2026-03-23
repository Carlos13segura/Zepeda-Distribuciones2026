import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-settings.component.html',
  styleUrls: ['./privacy-settings.component.scss']
})
export class PrivacySettingsComponent {
  isModalOpen = signal(false);
  
  toggleModal(): void {
    this.isModalOpen.update(v => !v);
  }
  
  closeModal(): void {
    this.isModalOpen.set(false);
  }
  
  denyAll(): void {
    this.isModalOpen.set(false);
  }
  
  acceptAll(): void {
    this.isModalOpen.set(false);
  }
}
