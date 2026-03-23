import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-4l-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './4l-b.html',
  styleUrls: ['./4l-b.scss']
})
export class B4lBComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
