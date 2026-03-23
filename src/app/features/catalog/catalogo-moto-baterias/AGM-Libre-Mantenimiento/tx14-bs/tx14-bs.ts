import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-tx14-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tx14-bs.html',
  styleUrls: ['./tx14-bs.scss']
})
export class Tx14BsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
