import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-12a-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './12a-a.html',
  styleUrls: ['./12a-a.scss']
})
export class B12aAComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
