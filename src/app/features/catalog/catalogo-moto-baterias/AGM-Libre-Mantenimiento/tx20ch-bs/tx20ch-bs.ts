import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tx20ch-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tx20ch-bs.html',
  styleUrls: ['./tx20ch-bs.scss']
})
export class Tx20chBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
