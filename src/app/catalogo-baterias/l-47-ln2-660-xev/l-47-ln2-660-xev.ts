import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-l-47-ln2-660-xev',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './l-47-ln2-660-xev.html',
    styleUrl: './l-47-ln2-660-xev.scss'
})
export class L47Ln2660XevComponent {
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
        model: 'L-47(LN2)-660 XEV',
        price: 5490.00, // Placeholder
        specs: {
            bci: 'LN2',
            voltage: '12V',
            ca: '660 Amp',
            cr: '100 min', // Placeholder
            length: '242 mm',
            width: '175 mm',
            weight: '15.5 kg' // Placeholder
        },
        images: [
            // Placeholders
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179712-lth_protect_auto_h5_xev_front.png?sfvrsn=bf6a0487_1', // Estimated URL
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179712-lth_protect_auto_h5_xev_3-4_left.png?sfvrsn=cc80c7d4_1',
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179712-lth_protect_auto_h5_xev_3-4_right.png?sfvrsn=5d9a9109_1'
        ]
    };
}
