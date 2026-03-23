import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-6.5l-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './6.5l-b.html',
  styleUrls: ['./6.5l-b.scss']
})
export class B6_5lBComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
