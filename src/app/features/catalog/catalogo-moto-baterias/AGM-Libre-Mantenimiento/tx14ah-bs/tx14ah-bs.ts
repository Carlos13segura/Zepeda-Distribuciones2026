import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tx14ah-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tx14ah-bs.html',
  styleUrls: ['./tx14ah-bs.scss']
})
export class Tx14ahBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
