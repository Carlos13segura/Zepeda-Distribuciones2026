import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-16cl-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './16cl-b.html',
  styleUrls: ['./16cl-b.scss']
})
export class B16clBComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
