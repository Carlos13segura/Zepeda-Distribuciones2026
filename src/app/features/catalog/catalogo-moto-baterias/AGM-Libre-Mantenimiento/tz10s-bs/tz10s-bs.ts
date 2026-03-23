import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tz10s-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tz10s-bs.html',
  styleUrls: ['./tz10s-bs.scss']
})
export class Tz10sBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
