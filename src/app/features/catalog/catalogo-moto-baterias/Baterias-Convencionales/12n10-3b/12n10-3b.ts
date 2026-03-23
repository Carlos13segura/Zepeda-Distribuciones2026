import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-12n10-3b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './12n10-3b.html',
  styleUrls: ['./12n10-3b.scss']
})
export class B12n103bComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
