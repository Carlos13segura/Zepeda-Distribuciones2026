import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-7-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './7-a.html',
  styleUrls: ['./7-a.scss']
})
export class B7AComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
