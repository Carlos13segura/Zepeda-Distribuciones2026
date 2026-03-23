import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-t12b-bs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './t12b-bs.html',
  styleUrls: ['./t12b-bs.scss']
})
export class T12bBsComponent {
  constructor(private cartService: CartService) {}
  addToCart() {}
  handleOrder() {}
  callPhone() {}
  handleLocation() {}
}
