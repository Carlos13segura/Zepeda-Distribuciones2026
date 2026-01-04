import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-14l-a2',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './14l-a2.html',
    styleUrls: ['./14l-a2.scss']
})
export class FourteenLA2Component {

    private cartService = inject(CartService);
    private router = inject(Router);

    constructor() { }

    // Function to handle phone call
    callPhone() {
        // Try to initiate a phone call on mobile devices
        window.location.href = "tel:8008358400"
        console.log("Phone call initiated")
    }

    addToCart() {
        this.cartService.confirmAndAdd();
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
}
