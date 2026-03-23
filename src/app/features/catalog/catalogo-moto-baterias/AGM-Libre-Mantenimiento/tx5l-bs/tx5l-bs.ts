import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tx5l-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tx5l-bs.html',
  styleUrls: ['./tx5l-bs.scss']
})
export class Tx5lBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
