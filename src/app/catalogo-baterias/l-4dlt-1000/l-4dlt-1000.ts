import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
@Component({
    selector: 'app-l-4dlt-1000',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './l-4dlt-1000.html',
    styleUrl: './l-4dlt-1000.scss',
})
export class L4dlt1000Component {
    private cartService = inject(CartService);
    private router = inject(Router);

    addToCart() {
        this.cartService.confirmAndAdd();
    }

    // Function to handle phone call
    callPhone() {
        // Try to initiate a phone call on mobile devices
        window.location.href = "tel:8008358400"
        console.log("Phone call initiated")
    }

    // Function to handle location
    handleLocation() {
        this.router.navigate(['/centros-servicio-resultados']);
        console.log("Location request initiated")
    }

    // Function to handle order
    handleOrder() {
        this.router.navigate(['/lth-domicilio']);
        console.log("Order request initiated")
    }
}
