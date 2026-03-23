import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-14l-a2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './14l-a2.html',
  styleUrls: ['./14l-a2.scss']
})
export class B14lA2Component {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
