import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tx9-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tx9-bs.html',
  styleUrls: ['./tx9-bs.scss']
})
export class Tx9BsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
