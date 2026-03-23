import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-12n7b-3a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './12n7b-3a.html',
  styleUrls: ['./12n7b-3a.scss']
})
export class B12n7b3aComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
