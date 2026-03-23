import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-cart-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-confirmation.html',
  styleUrls: ['./cart-confirmation.scss']
})
export class CartConfirmationComponent {
  private cartService = inject(CartService);
  
  isOpen = signal(false);
  
  cancel(): void {
    this.isOpen.set(false);
  }
  
  confirm(): void {
    this.isOpen.set(false);
  }
}
