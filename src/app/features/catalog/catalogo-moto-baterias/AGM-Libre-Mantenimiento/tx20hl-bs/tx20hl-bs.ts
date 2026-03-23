import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tx20hl-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tx20hl-bs.html',
  styleUrls: ['./tx20hl-bs.scss']
})
export class Tx20hlBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
