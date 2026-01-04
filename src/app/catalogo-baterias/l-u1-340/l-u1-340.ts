import { Router } from '@angular/router';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-l-u1-340',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './l-u1-340.html',
    styleUrls: ['./l-u1-340.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LU1340Component {
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

