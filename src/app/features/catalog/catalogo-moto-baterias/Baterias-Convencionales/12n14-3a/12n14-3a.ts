import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-12n14-3a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './12n14-3a.html',
  styleUrls: ['./12n14-3a.scss']
})
export class B12n143aComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
