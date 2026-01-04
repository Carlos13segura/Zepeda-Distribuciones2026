import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tz10s-bs',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './tz10s-bs.html',
    styleUrls: ['../tx4l-bs/moto-AGM-battery.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Tz10sBsComponent {
    private cartService = inject(CartService);
    private router = inject(Router);

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

    // Function to handle phone call
    callPhone() {
        // Try to initiate a phone call on mobile devices
        window.location.href = "tel:8008358400"
        console.log("Phone call initiated")
    }
}
