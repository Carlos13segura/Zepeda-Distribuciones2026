import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-9-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './9-b.html',
  styleUrls: ['./9-b.scss']
})
export class B9BComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
