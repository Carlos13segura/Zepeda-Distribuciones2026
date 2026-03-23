import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tx12-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tx12-bs.html',
  styleUrls: ['./tx12-bs.scss']
})
export class Tx12BsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
