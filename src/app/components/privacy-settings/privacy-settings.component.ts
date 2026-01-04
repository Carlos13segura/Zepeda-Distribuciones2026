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

    toggleModal() {
        this.isModalOpen.update(value => !value);
    }

    closeModal() {
        this.isModalOpen.set(false);
    }

    acceptAll() {
        // Aquí iría la lógica para aceptar todos los consentimientos
        this.closeModal();
        console.log('Todos los consentimientos aceptados');
    }

    denyAll() {
        // Aquí iría la lógica para denegar consentimientos
        this.closeModal();
        console.log('Consentimientos denegados');
    }
}
