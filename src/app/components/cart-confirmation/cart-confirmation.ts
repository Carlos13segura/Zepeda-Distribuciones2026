import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart-confirmation',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cart-confirmation.html',
    styleUrl: './cart-confirmation.scss'
})
export class CartConfirmationComponent {
    cartService = inject(CartService);

    confirm() {
        this.cartService.handleUserResponse(true);
    }

    cancel() {
        this.cartService.handleUserResponse(false);
    }
}
