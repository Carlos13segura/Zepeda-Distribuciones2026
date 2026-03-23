import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-t14b-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './t14b-bs.html',
  styleUrls: ['./t14b-bs.scss']
})
export class T14bBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
