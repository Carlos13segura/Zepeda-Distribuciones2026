import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.scss']
})
export class CarritoComponent {
  cartService = inject(CartService);
  
  isOpen = signal(false);
  deliveryInstructions = '';
  firstName = '';
  lastName = '';
  deliveryType = signal<'inmediata' | 'programada'>('inmediata');
  paymentMethod = signal<'credit' | 'debit' | 'cash'>('credit');
  termsAccepted = false;
  
  toggleCart(): void {
    this.isOpen.update(v => !v);
  }
  
  closeCart(): void {
    this.isOpen.set(false);
  }
  
  removeItem(index: number): void {
    const items = this.cartService.items();
    if (items[index]) {
      this.cartService.removeItem(items[index].id);
    }
  }
  
  get itemCount(): number {
    return this.cartService.totalItems();
  }
  
  get total(): number {
    return this.cartService.totalPrice();
  }
}
