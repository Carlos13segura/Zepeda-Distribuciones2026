import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-l-140r-ln1-570-xev',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './l-140r-ln1-570-xev.html',
    styleUrl: './l-140r-ln1-570-xev.scss'
})
export class L140rLn1570XevComponent {
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
        model: 'L-140R(LN1)-570 XEV',
        price: 5490.00,
        specs: {
            bci: 'LN1',
            voltage: '12V',
            ca: '570 Amp', // Updated based on title L-140R(LN1)-570 XEV (HTML had 562 but title implies 570)
            cr: '75 min',
            length: '244 mm',
            width: '174 mm',
            weight: '14.107 kg'
        },
        images: [
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179710-lth_protect_auto_h4_xev_front.png?sfvrsn=5c3e05c2_1',
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179710-lth_protect_auto_h4_xev_3-4_left.png?sfvrsn=695aa473_1',
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179710-lth_protect_auto_h4_xev_3-4_right.png?sfvrsn=c8b95aee_1'
        ]
    };
}
