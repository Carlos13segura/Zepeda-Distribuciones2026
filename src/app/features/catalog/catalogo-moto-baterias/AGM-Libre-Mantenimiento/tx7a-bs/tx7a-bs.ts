import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tx7a-bs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tx7a-bs.html',
  styleUrls: ['./tx7a-bs.scss']
})
export class Tx7aBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
