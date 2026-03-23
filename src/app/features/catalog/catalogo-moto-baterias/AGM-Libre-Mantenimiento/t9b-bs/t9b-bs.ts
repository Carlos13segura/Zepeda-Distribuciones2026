import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-t9b-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './t9b-bs.html',
  styleUrls: ['./t9b-bs.scss']
})
export class T9bBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
