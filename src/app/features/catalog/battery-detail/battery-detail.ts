import { Component, Input, inject, signal, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '@core/services/cart.service';

export interface BatteryData {
  id: string;
  name: string;
  price: number;
  cca: string;
  cr: string;
  ah: string;
  image: string;
  warranty: string;
  polarity: 'izquierdo' | 'derecho';
}

@Component({
  selector: 'app-battery-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="battery-detail-container" *ngIf="product()">
      <div class="product-gallery">
        <img [src]="product()!.image" [alt]="product()!.name">
      </div>
      <div class="product-info">
        <h1>Batería {{ product()!.name }}</h1>
        <p class="price">{{ product()!.price | currency }}</p>
        
        <div class="tech-specs">
          <div class="spec-item"><strong>CCA:</strong> {{ product()!.cca }} Amp</div>
          <div class="spec-item"><strong>CR:</strong> {{ product()!.cr }} Min</div>
          <div class="spec-item"><strong>AH:</strong> {{ product()!.ah }}</div>
          <div class="spec-item"><strong>Garantía:</strong> {{ product()!.warranty }}</div>
          <div class="spec-item"><strong>Polaridad:</strong> {{ product()!.polarity }}</div>
        </div>

        <button class="btn btn-primary lg" (click)="addToCart()">
           Agregar al carrito
        </button>
      </div>
    </div>
  `,
  styles: [`
    .battery-detail-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 2rem;
      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
    }
  `]
})
export class BatteryDetailComponent implements OnChanges {
  @Input({ required: true }) data!: BatteryData;
  private cartService = inject(CartService);
  
  product = signal<BatteryData | null>(null);

  ngOnChanges() {
    this.product.set(this.data);
  }

  addToCart() {
    const p = this.product();
    if (p) {
      this.cartService.addToCart({
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image
      });
    }
  }
}
