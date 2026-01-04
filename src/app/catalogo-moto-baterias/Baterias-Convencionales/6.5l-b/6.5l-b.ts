import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
    selector: 'app-6.5l-b',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './6.5l-b.html',
    styleUrls: ['./6.5l-b.scss']
})
export class SixPointFiveLbComponent {
    private cartService = inject(CartService);
    private router = inject(Router);

    // Function to handle phone call
    callPhone() {
        // Try to initiate a phone call on mobile devices
        window.location.href = "tel:8008358400"
        console.log("Phone call initiated")
    }

    //funcion para localización
    handleLocation() {
        this.router.navigate(['/centros-servicio-resultados']);
        console.log("Location request initiated")
    }

    //funcion para ordenar
    handleOrder() {
        this.router.navigate(['/lth-domicilio']);
        console.log("Order request initiated")
    }

    addToCart() {
        this.cartService.confirmAndAdd();
    }
}
