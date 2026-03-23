import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-12n9-4b-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './12n9-4b-1.html',
  styleUrls: ['./12n9-4b-1.scss']
})
export class B12n94b1Component {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
