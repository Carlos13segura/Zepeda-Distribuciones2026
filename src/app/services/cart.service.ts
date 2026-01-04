import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
    name: string;
    image: string;
    price: string;
    // Add other properties as needed from BatteryProduct
}

@Injectable({
    providedIn: 'root'
})
export class CartService {
    // Cart State
    isVisible = signal(false);

    // We store the list of items
    items = signal<CartItem[]>([]);

    // Computed signals for derived state
    itemCount = computed(() => this.items().length);

    total = computed(() => {
        return this.items().reduce((acc, item) => {
            return acc + this.parsePrice(item.price);
        }, 0);
    });

    // Confirmation Modal State
    isConfirmationOpen = signal(false);
    pendingProduct: any = null;
    private timerId: any = null;

    constructor() { }

    /**
     * Shows the cart floating button and optionally opens the overlay
     */
    showCart() {
        this.isVisible.set(true);
    }

    /**
     * Hides the cart floating button
     */
    hideCart() {
        this.isVisible.set(false);
    }

    /**
     * Direct add method (used internally after confirmation)
     */
    addToCart(product: any = null) {
        if (!product) return;

        // Add to our items list
        this.items.update(currentItems => [...currentItems, product]);

        this.showCart();
    }

    /**
     * Removes an item from the cart by index
     */
    removeFromCart(index: number) {
        this.items.update(currentItems => {
            const newItems = [...currentItems];
            newItems.splice(index, 1);
            return newItems;
        });
    }

    /**
     * Helper to parse price string like "$2,960.00 MXN" to number
     */
    private parsePrice(priceStr: string): number {
        if (!priceStr) return 0;
        // Remove '$', ',', ' MXN' and other non-numeric chars except '.'
        const cleanStr = priceStr.replace(/[^0-9.]/g, '');
        const val = parseFloat(cleanStr);
        return isNaN(val) ? 0 : val;
    }

    /**
     * Initiates the add to cart flow with confirmation
     */
    confirmAndAdd(product: any = null) {
        this.pendingProduct = product;
        this.isConfirmationOpen.set(true);

        // clear any existing timer
        if (this.timerId) clearTimeout(this.timerId);

        // Start 5 second timer
        this.timerId = setTimeout(() => {
            this.handleTimeout();
        }, 5000);
    }

    handleUserResponse(confirmed: boolean) {
        // Stop timer
        if (this.timerId) clearTimeout(this.timerId);

        this.isConfirmationOpen.set(false);

        if (confirmed) {
            this.addToCart(this.pendingProduct);
            alert("Agregado exitosamente");
        } else {
            alert("No fue agregado");
        }

        this.pendingProduct = null;
    }

    handleTimeout() {
        // If modal is still open, show alert
        if (this.isConfirmationOpen()) {
            alert("Por favor confirma tu producto");
        }
    }
}
