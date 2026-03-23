import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tx30l-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tx30l-bs.html',
  styleUrls: ['./tx30l-bs.scss']
})
export class Tx30lBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
