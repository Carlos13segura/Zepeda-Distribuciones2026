import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tx24hl-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tx24hl-bs.html',
  styleUrls: ['./tx24hl-bs.scss']
})
export class Tx24hlBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
