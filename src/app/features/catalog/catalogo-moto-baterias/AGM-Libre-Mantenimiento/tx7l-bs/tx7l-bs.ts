import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tx7l-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tx7l-bs.html',
  styleUrls: ['./tx7l-bs.scss']
})
export class Tx7lBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
