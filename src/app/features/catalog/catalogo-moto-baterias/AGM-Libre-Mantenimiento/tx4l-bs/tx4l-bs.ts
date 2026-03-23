import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tx4l-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tx4l-bs.html',
  styleUrls: ['./tx4l-bs.scss']
})
export class Tx4lBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
