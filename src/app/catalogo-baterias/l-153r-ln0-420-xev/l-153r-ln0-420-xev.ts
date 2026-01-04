import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-l-153r-ln0-420-xev',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './l-153r-ln0-420-xev.html',
    styleUrl: './l-153r-ln0-420-xev.scss'
})
export class L153rLn0420XevComponent {
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
        model: 'L-153R(LN0)-420 XEV',
        price: 5490.00,
        specs: {
            bci: 'LN0',
            voltage: '12V',
            ca: '562 Amp', // CA value from provided HTML
            cr: '75 min',
            length: '244 mm',
            width: '174 mm',
            weight: '14.107 kg'
        },
        images: [
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179709-lth_protect_auto_h3_xev_front.png?sfvrsn=ed1f3076_1',
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179709-lth_protect_auto_h3_xev_3-4_right.png?sfvrsn=b58b50f1_1',
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179709-lth_protect_auto_h3_xev_3-4_left.png?sfvrsn=8fca42ca_1'
        ]
    };
}
