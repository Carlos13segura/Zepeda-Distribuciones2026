import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-12n12a-4a-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './12n12a-4a-1.html',
  styleUrls: ['./12n12a-4a-1.scss']
})
export class B12n12a4a1Component {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
