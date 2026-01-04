import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-l-51r-b24l-410-xev',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './l-51r-b24l-410-xev.html',
    styleUrl: './l-51r-b24l-410-xev.scss'
})
export class L51rB24l410XevComponent {
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

    product = {
        model: 'L-51R(B24L)-410 XEV',
        price: 5490.00, // Placeholder
        specs: {
            bci: '51R',
            voltage: '12V',
            ca: '410 Amp',
            cr: '75 min', // Placeholder
            length: '238 mm',
            width: '129 mm',
            weight: '12.5 kg' // Placeholder
        },
        images: [
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179714-lth_protect_auto_h6_xev_front.png', // Placeholder URL
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179714-lth_protect_auto_h6_xev_3-4_left.png',
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179714-lth_protect_auto_h6_xev_3-4_right.png'
        ]
    };
}
