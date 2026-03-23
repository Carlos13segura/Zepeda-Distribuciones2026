import { Injectable, signal, computed, inject } from '@angular/core';
import { NotificationService } from './notification.service';


export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private notificationService = inject(NotificationService);
  private _items = signal<CartItem[]>([]);

  public items = this._items.asReadonly();

  public totalItems = computed(() => this._items().reduce((acc, item) => acc + item.quantity, 0));
  public totalPrice = computed(() => this._items().reduce((acc, item) => acc + (item.price * item.quantity), 0));
  public itemCount = this.totalItems;

  addToCart(item: Omit<CartItem, 'quantity'>) {
    this._items.update(items => {
      const existing = items.find(i => i.id === item.id);
      if (existing) {
        return items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...items, { ...item, quantity: 1 }];
    });
    this.notificationService.success(`¡${item.name} añadido al carrito!`);
  }


  removeItem(id: string) {
    this._items.update(items => items.filter(i => i.id !== id));
  }

  clear() {
    this._items.set([]);
  }
}
