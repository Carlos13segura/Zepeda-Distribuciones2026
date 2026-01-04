import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-l-51jis-b24pp-410-xev',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './l-51jis-b24pp-410-xev.html',
    styleUrls: ['./l-51jis-b24pp-410-xev.scss']
})
export class L51jisB24pp410XevComponent {
    product = {
        model: 'L-51JIS(B24PP)-410 XEV',
        price: 6300.00,
        specs: {
            bci: '51 (JIS)',
            voltage: '12V',
            ca: '410 Amp',
            cr: '75 min',
            length: '244 mm',
            width: '174 mm',
            weight: '14.107 kg'
        },
        images: [
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179707-lth_protect_auto_51_b24pp_xev_front.png?sfvrsn=5361f01_1',
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179707-lth_protect_auto_51_b24pp_xev_3-4_right.png?sfvrsn=5eec3b04_1',
            'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179707-lth_protect_auto_51_b24pp_xev_3-4_left.png?sfvrsn=f7f68950_1'
        ]
    };
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
