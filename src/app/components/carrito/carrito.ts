import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-carrito',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './carrito.html',
    styleUrl: './carrito.scss'
})
export class CarritoComponent {
    cartService = inject(CartService);

    isOpen = signal(false);

    // Form fields
    email = '';
    lada = '+52';
    phone = '';
    firstName = '';
    lastName = '';
    deliveryInstructions = '';

    deliveryType = 'programada'; // 'inmediata' or 'programada'
    paymentMethod = ''; // 'credit', 'debit', 'cash'

    termsAccepted = false;

    // Mock Cart Data properties removed in favor of direct service access


    toggleCart() {
        this.isOpen.update(v => !v);
    }

    closeCart() {
        this.isOpen.set(false);
    }
}
