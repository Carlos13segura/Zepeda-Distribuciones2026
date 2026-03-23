import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tx6-5l-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tx6-5l-bs.html',
  styleUrls: ['./tx6-5l-bs.scss']
})
export class Tx65lBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
