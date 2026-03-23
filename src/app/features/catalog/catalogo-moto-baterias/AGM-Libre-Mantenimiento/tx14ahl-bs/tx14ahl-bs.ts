import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tx14ahl-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tx14ahl-bs.html',
  styleUrls: ['./tx14ahl-bs.scss']
})
export class Tx14ahlBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
