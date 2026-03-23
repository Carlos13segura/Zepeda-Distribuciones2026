import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-t7b-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './t7b-bs.html',
  styleUrls: ['./t7b-bs.scss']
})
export class T7bBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
